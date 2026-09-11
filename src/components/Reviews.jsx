import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

const STORAGE_KEY = 'portfolio_user_reviews';

// Deterministic color palette for avatar initials
const AVATAR_COLORS = [
  '#2563EB', // Blue
  '#059669', // Emerald
  '#7C3AED', // Purple
  '#D97706', // Amber
  '#DC2626', // Red
  '#0891B2', // Cyan
  '#4F46E5', // Indigo
];

function getAvatarColor(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_COLORS.length;
  return AVATAR_COLORS[index];
}

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Star rating icon renderer
function StarRating({ rating = 5, max = 5, size = 16, interactive = false, onHover, onClick, hoverValue = 0 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const isFilled = interactive ? i <= (hoverValue || rating) : i <= rating;
    stars.push(
      <span
        key={i}
        className={`star-wrapper ${interactive ? 'star-wrapper--interactive' : ''}`}
        onMouseEnter={() => interactive && onHover && onHover(i)}
        onMouseLeave={() => interactive && onHover && onHover(0)}
        onClick={() => interactive && onClick && onClick(i)}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        aria-label={interactive ? `${i} star${i > 1 ? 's' : ''}` : undefined}
        onKeyDown={(e) => {
          if (interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick && onClick(i);
          }
        }}
      >
        <svg
          className={`star-icon ${isFilled ? 'star-icon--filled' : 'star-icon--empty'}`}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={isFilled ? '#F59E0B' : 'none'}
          stroke={isFilled ? '#F59E0B' : 'currentColor'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </span>
    );
  }
  return <div className="stars-row">{stars}</div>;
}

export default function Reviews() {
  const { t, language } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // User submitted custom reviews from localStorage
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | '5' | '4'

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    category: 'collaborator',
    comment: '',
    rating: 5,
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Intersection observer for section animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Merge default reviews from active translation with user reviews
  const defaultReviews = t.reviews?.defaultReviews || [];
  const allReviews = [...userReviews, ...defaultReviews];

  // Calculate statistics
  const totalCount = allReviews.length;
  const averageScore =
    totalCount > 0
      ? (allReviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0) / totalCount).toFixed(1)
      : '5.0';

  // Filtered reviews
  const filteredReviews = allReviews.filter((r) => {
    if (selectedFilter === '5') return Number(r.rating) === 5;
    if (selectedFilter === '4') return Number(r.rating) === 4;
    return true;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingSelect = (val) => {
    setFormData((prev) => ({
      ...prev,
      rating: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);

    // Format current localized date string
    const now = new Date();
    const dateFormatted = now.toLocaleDateString(language || 'en', {
      month: 'long',
      year: 'numeric',
    });

    const categoryLabel =
      t.reviews?.form?.categoryOptions?.[formData.category] || formData.category;

    const newReview = {
      id: `user-${Date.now()}`,
      name: formData.name.trim(),
      role: formData.role.trim() || 'Visitor',
      category: categoryLabel,
      rating: Number(formData.rating) || 5,
      date: dateFormatted,
      comment: formData.comment.trim(),
    };

    const updatedUserReviews = [newReview, ...userReviews];
    setUserReviews(updatedUserReviews);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUserReviews));
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      name: '',
      role: '',
      category: 'collaborator',
      comment: '',
      rating: 5,
    });

    // Automatically close success alert after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsFormOpen(false);
    }, 3500);
  };

  return (
    <section id="reviews" className="section reviews-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`reviews-header ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <h2 className="section-title">{t.reviews?.title || 'Recommendations & Reviews'}</h2>
          <p className="section-subtitle">
            {t.reviews?.subtitle ||
              'Feedback from collaborators, peers, and visitors — leave your rating below!'}
          </p>
        </div>

        {/* Rating Summary & CTA Row */}
        <div className={`reviews-summary-card ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}>
          <div className="summary-score-box">
            <div className="summary-big-score">{averageScore}</div>
            <div className="summary-score-details">
              <StarRating rating={Math.round(Number(averageScore))} size={20} />
              <span className="summary-count">
                {t.reviews?.basedOn || 'based on'} <strong>{totalCount}</strong>{' '}
                {t.reviews?.reviewsCount || 'recommendations'}
              </span>
            </div>
          </div>

          <div className="summary-badge-wrap">
            <div className="summary-recommended-pill">
              <span className="recommended-dot" />
              <span>{t.reviews?.recommendedScore || '100% positive feedback'}</span>
            </div>
          </div>

          <div className="summary-cta-wrap">
            <button
              type="button"
              className={`reviews-toggle-btn ${isFormOpen ? 'reviews-toggle-btn--active' : ''}`}
              onClick={() => setIsFormOpen((prev) => !prev)}
            >
              <span>
                {isFormOpen
                  ? t.reviews?.hideFormBtn || 'Close Form'
                  : t.reviews?.leaveReviewBtn || '⭐ Leave a Review / Recommendation'}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Review Form */}
        {isFormOpen && (
          <div className="review-form-container">
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-header-row">
                <h3 className="review-form-title">{t.reviews?.form?.title || 'Write a Recommendation'}</h3>
                <p className="review-form-desc">
                  {t.reviews?.form?.desc ||
                    'Share your feedback, experience collaborating with Stephen, or thoughts on his projects.'}
                </p>
              </div>

              {showSuccess && (
                <div className="review-alert-success" role="alert">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>
                    {t.reviews?.form?.successAlert ||
                      'Thank you! Your recommendation and star rating have been published.'}
                  </span>
                </div>
              )}

              {/* Star Rating Selector */}
              <div className="form-group">
                <label className="form-label">{t.reviews?.form?.rating || 'Star Rating'}</label>
                <div className="interactive-star-selector">
                  <StarRating
                    rating={formData.rating}
                    size={28}
                    interactive={true}
                    hoverValue={hoverRating}
                    onHover={setHoverRating}
                    onClick={handleRatingSelect}
                  />
                  <span className="rating-score-label">
                    {hoverRating || formData.rating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Name & Role Row */}
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="review-name" className="form-label">
                    {t.reviews?.form?.name || 'Your Name'} *
                  </label>
                  <input
                    type="text"
                    id="review-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.reviews?.form?.namePlaceholder || 'e.g. Alex Morgan'}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="review-role" className="form-label">
                    {t.reviews?.form?.role || 'Your Role / Company'}
                  </label>
                  <input
                    type="text"
                    id="review-role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder={
                      t.reviews?.form?.rolePlaceholder ||
                      'e.g. Senior Software Engineer @ TechCorp (or Visitor)'
                    }
                    className="form-input"
                  />
                </div>
              </div>

              {/* Relationship Category */}
              <div className="form-group">
                <label htmlFor="review-category" className="form-label">
                  {t.reviews?.form?.category || 'Relationship / Context'}
                </label>
                <select
                  id="review-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="collaborator">
                    {t.reviews?.form?.categoryOptions?.collaborator || 'Colleague / Collaborator'}
                  </option>
                  <option value="peer">
                    {t.reviews?.form?.categoryOptions?.peer || 'Fellow Developer / Peer'}
                  </option>
                  <option value="client">
                    {t.reviews?.form?.categoryOptions?.client || 'Client / Product Owner'}
                  </option>
                  <option value="recruiter">
                    {t.reviews?.form?.categoryOptions?.recruiter || 'Recruiter / Hiring Manager'}
                  </option>
                  <option value="visitor">
                    {t.reviews?.form?.categoryOptions?.visitor || 'Website Visitor'}
                  </option>
                </select>
              </div>

              {/* Comment Textarea */}
              <div className="form-group">
                <label htmlFor="review-comment" className="form-label">
                  {t.reviews?.form?.comment || 'Your Recommendation / Comment'} *
                </label>
                <textarea
                  id="review-comment"
                  name="comment"
                  rows="4"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder={
                    t.reviews?.form?.commentPlaceholder ||
                    'Write your thoughts on Stephen’s work, technical capabilities, or website experience...'
                  }
                  required
                  className="form-input form-textarea"
                />
              </div>

              {/* Submit Button */}
              <div className="form-actions-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary review-submit-btn"
                >
                  {isSubmitting
                    ? t.reviews?.form?.submitting || 'Submitting...'
                    : t.reviews?.form?.submit || 'Submit Recommendation'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary review-cancel-btn"
                  onClick={() => setIsFormOpen(false)}
                >
                  {t.reviews?.hideFormBtn || 'Close Form'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="reviews-filter-bar">
          <button
            type="button"
            className={`reviews-filter-pill ${selectedFilter === 'all' ? 'reviews-filter-pill--active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            {t.reviews?.filterAll || 'All Ratings'} ({totalCount})
          </button>
          <button
            type="button"
            className={`reviews-filter-pill ${selectedFilter === '5' ? 'reviews-filter-pill--active' : ''}`}
            onClick={() => setSelectedFilter('5')}
          >
            {t.reviews?.filter5 || '5 Stars ★'} (
            {allReviews.filter((r) => Number(r.rating) === 5).length})
          </button>
          <button
            type="button"
            className={`reviews-filter-pill ${selectedFilter === '4' ? 'reviews-filter-pill--active' : ''}`}
            onClick={() => setSelectedFilter('4')}
          >
            {t.reviews?.filter4 || '4 Stars ★'} (
            {allReviews.filter((r) => Number(r.rating) === 4).length})
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.length === 0 ? (
            <div className="reviews-empty">
              <p>{t.reviews?.emptyState || 'No reviews found for this filter.'}</p>
            </div>
          ) : (
            filteredReviews.map((item, index) => {
              const avatarBg = getAvatarColor(item.name);
              const initials = getInitials(item.name);
              return (
                <article
                  key={item.id}
                  className={`review-card ${isVisible ? 'review-card--visible' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card Header: Author Info & Rating */}
                  <div className="review-card-header">
                    <div
                      className="review-avatar"
                      style={{ backgroundColor: avatarBg }}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                    <div className="review-author-meta">
                      <h4 className="review-author-name">{item.name}</h4>
                      <p className="review-author-role">{item.role}</p>
                    </div>
                  </div>

                  {/* Stars & Date Row */}
                  <div className="review-rating-row">
                    <StarRating rating={Number(item.rating) || 5} size={15} />
                    <time className="review-date">{item.date}</time>
                  </div>

                  {/* Comment Body */}
                  <blockquote className="review-comment">
                    <p>"{item.comment}"</p>
                  </blockquote>

                  {/* Card Footer: Category Pill & Verified Badge */}
                  <div className="review-card-footer">
                    <span className="review-category-tag">{item.category}</span>
                    <span className="review-verified-badge" title="Verified review">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t.reviews?.verified || 'Verified Review'}</span>
                    </span>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

