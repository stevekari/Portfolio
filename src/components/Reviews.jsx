import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Reviews.css';

const STORAGE_KEY = 'portfolio_user_reviews';
const DELETED_KEY = 'portfolio_deleted_reviews';

// Deterministic color palette for avatar initials
const AVATAR_COLORS = [
  '#D97706', // Warm Gold
  '#059669', // Emerald
  '#2563EB', // Blue
  '#9F1239', // Burgundy
  '#7C3AED', // Purple
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

function detectCategoryKey(cat = '') {
  const lower = String(cat).toLowerCase();
  if (lower.includes('colleague') || lower.includes('collaborator') || lower.includes('colega') || lower.includes('collègue') || lower.includes('kollege') || lower.includes('samenwerker')) return 'collaborator';
  if (lower.includes('recruiter') || lower.includes('hiring') || lower.includes('rh') || lower.includes('reclutador') || lower.includes('personal')) return 'recruiter';
  if (lower.includes('peer') || lower.includes('fellow') || lower.includes('compañero') || lower.includes('pair') || lower.includes('mede-ontwikkelaar') || lower.includes('entwickler')) return 'peer';
  if (lower.includes('client') || lower.includes('product') || lower.includes('cliente') || lower.includes('klant') || lower.includes('kunde')) return 'client';
  return 'visitor';
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
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // User submitted custom and edited reviews from localStorage
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  // Deleted review IDs to hide
  const [deletedIds, setDeletedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(DELETED_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [];
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
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
  const [successMessage, setSuccessMessage] = useState('');

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

  // Merge default reviews from active translation with user reviews, omitting deleted reviews
  const defaultReviews = (t.reviews?.defaultReviews || []).filter(
    (r) => !deletedIds.includes(r.id) && !userReviews.some((u) => u.id === r.id)
  );

  const activeUserReviews = userReviews.filter((r) => !deletedIds.includes(r.id));
  const allReviews = [...activeUserReviews, ...defaultReviews];

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

  const handleOpenNewForm = () => {
    setEditingReviewId(null);
    setFormData({
      name: '',
      role: '',
      category: 'collaborator',
      comment: '',
      rating: 5,
    });
    setSuccessMessage('');
    setIsFormOpen((prev) => !prev);
  };

  const handleEditReview = (review) => {
    setEditingReviewId(review.id);
    setFormData({
      name: review.name || '',
      role: review.role || '',
      category: review.categoryKey || detectCategoryKey(review.category),
      comment: review.comment || '',
      rating: Number(review.rating) || 5,
    });
    setSuccessMessage('');
    setIsFormOpen(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setFormData({
      name: '',
      role: '',
      category: 'collaborator',
      comment: '',
      rating: 5,
    });
    setIsFormOpen(false);
  };

  const handleDeleteReview = (reviewId) => {
    const confirmMsg = t.reviews?.deleteConfirm || 'Are you sure you want to delete this recommendation?';
    if (window.confirm(confirmMsg)) {
      const updatedDeleted = [...deletedIds, reviewId];
      setDeletedIds(updatedDeleted);
      const updatedUserReviews = userReviews.filter((r) => r.id !== reviewId);
      setUserReviews(updatedUserReviews);

      try {
        localStorage.setItem(DELETED_KEY, JSON.stringify(updatedDeleted));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUserReviews));
      } catch {
        // ignore
      }

      if (editingReviewId === reviewId) {
        handleCancelEdit();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);

    const now = new Date();
    const dateFormatted = now.toLocaleDateString(language || 'en', {
      month: 'long',
      year: 'numeric',
    });

    const categoryLabel =
      t.reviews?.form?.categoryOptions?.[formData.category] || formData.category;

    if (editingReviewId) {
      // Editing existing review
      const isAlreadyInUserReviews = userReviews.some((r) => r.id === editingReviewId);

      let updatedUserReviews;
      if (isAlreadyInUserReviews) {
        updatedUserReviews = userReviews.map((r) => {
          if (r.id === editingReviewId) {
            return {
              ...r,
              name: formData.name.trim(),
              role: formData.role.trim() || 'Visitor',
              category: categoryLabel,
              categoryKey: formData.category,
              rating: Number(formData.rating) || 5,
              comment: formData.comment.trim(),
              isEdited: true,
            };
          }
          return r;
        });
      } else {
        // Was a default review, promote to user review with updated values
        const editedReview = {
          id: editingReviewId,
          name: formData.name.trim(),
          role: formData.role.trim() || 'Visitor',
          category: categoryLabel,
          categoryKey: formData.category,
          rating: Number(formData.rating) || 5,
          date: dateFormatted,
          comment: formData.comment.trim(),
          isEdited: true,
        };
        updatedUserReviews = [editedReview, ...userReviews];
      }

      setUserReviews(updatedUserReviews);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUserReviews));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setSuccessMessage(t.reviews?.form?.updatedAlert || 'Your recommendation has been updated successfully!');

      setTimeout(() => {
        setSuccessMessage('');
        setIsFormOpen(false);
        setEditingReviewId(null);
      }, 3000);
    } else {
      // Adding brand new review
      const newReview = {
        id: `user-${Date.now()}`,
        name: formData.name.trim(),
        role: formData.role.trim() || 'Visitor',
        category: categoryLabel,
        categoryKey: formData.category,
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
      setSuccessMessage(t.reviews?.form?.successAlert || 'Thank you! Your recommendation has been published.');
      setFormData({
        name: '',
        role: '',
        category: 'collaborator',
        comment: '',
        rating: 5,
      });

      setTimeout(() => {
        setSuccessMessage('');
        setIsFormOpen(false);
      }, 3000);
    }
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
              className={`reviews-toggle-btn ${isFormOpen && !editingReviewId ? 'reviews-toggle-btn--active' : ''}`}
              onClick={handleOpenNewForm}
            >
              <span>
                {isFormOpen && !editingReviewId
                  ? t.reviews?.hideFormBtn || 'Close Form'
                  : t.reviews?.leaveReviewBtn || '⭐ Leave a Review / Recommendation'}
              </span>
            </button>
          </div>
        </div>

        {/* Expandable Review Form (Create & Edit Mode) */}
        {isFormOpen && (
          <div className="review-form-container" ref={formRef}>
            {editingReviewId && (
              <div className="review-editing-banner">
                <span className="editing-indicator-dot" />
                <span>
                  {t.reviews?.form?.editTitle || 'Editing Recommendation'} ({formData.name || '...'})
                </span>
                <button
                  type="button"
                  className="review-edit-cancel-link"
                  onClick={handleCancelEdit}
                >
                  {t.reviews?.cancelEdit || 'Cancel Edit'}
                </button>
              </div>
            )}

            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-header-row">
                <h3 className="review-form-title">
                  {editingReviewId
                    ? t.reviews?.form?.editTitle || 'Edit Your Recommendation'
                    : t.reviews?.form?.title || 'Write a Recommendation'}
                </h3>
                <p className="review-form-desc">
                  {editingReviewId
                    ? t.reviews?.form?.editDesc ||
                      'Make adjustments or correct any mistakes in your recommendation below.'
                    : t.reviews?.form?.desc ||
                      'Share your feedback, experience collaborating with Stephen, or thoughts on his projects.'}
                </p>
              </div>

              {successMessage && (
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
                  <span>{successMessage}</span>
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

              {/* Submit & Cancel Buttons */}
              <div className="form-actions-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary review-submit-btn"
                >
                  {isSubmitting
                    ? t.reviews?.form?.submitting || 'Saving...'
                    : editingReviewId
                    ? t.reviews?.form?.updateSubmit || 'Save Changes'
                    : t.reviews?.form?.submit || 'Submit Recommendation'}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary review-cancel-btn"
                  onClick={editingReviewId ? handleCancelEdit : () => setIsFormOpen(false)}
                >
                  {editingReviewId
                    ? t.reviews?.cancelEdit || 'Cancel Edit'
                    : t.reviews?.hideFormBtn || 'Close Form'}
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
            filteredReviews.map((item) => {
              const avatarBg = getAvatarColor(item.name);
              const initials = getInitials(item.name);
              const isBeingEdited = editingReviewId === item.id;

              return (
                <article
                  key={item.id}
                  className={`review-card ${isVisible ? 'review-card--visible' : ''} ${isBeingEdited ? 'review-card--editing' : ''}`}
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

                    {/* Edit & Delete Action Buttons */}
                    <div className="review-card-actions">
                      <button
                        type="button"
                        className="review-action-btn review-action-btn--edit"
                        onClick={() => handleEditReview(item)}
                        title={t.reviews?.edit || 'Edit recommendation'}
                        aria-label={`${t.reviews?.edit || 'Edit'} ${item.name}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="review-action-btn review-action-btn--delete"
                        onClick={() => handleDeleteReview(item.id)}
                        title={t.reviews?.delete || 'Delete recommendation'}
                        aria-label={`${t.reviews?.delete || 'Delete'} ${item.name}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Stars & Date Row */}
                  <div className="review-rating-row">
                    <StarRating rating={Number(item.rating) || 5} size={15} />
                    <div className="review-date-wrap">
                      <time className="review-date">{item.date}</time>
                      {item.isEdited && (
                        <span className="review-edited-tag">
                          ({t.reviews?.editedBadge || 'Edited'})
                        </span>
                      )}
                    </div>
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
