import { useEffect, useRef, useState } from 'react';
import './Blog.css';
import { blogPosts } from '../data/data';
import { useLanguage } from '../context/LanguageContext';

function useReveal(opts = {}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.unobserve(el); } },
      { threshold: opts.threshold || 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

export default function Blog() {
  const { t } = useLanguage();
  const [headerRef, headerVis] = useReveal();
  const [gridRef, gridVis] = useReveal({ threshold: 0.1 });

  return (
    <section id="blog" className="section">
      <div className="container">
        <div
          ref={headerRef}
          className={headerVis ? 'reveal-visible' : 'reveal-hidden'}
        >
          <h2 className="section-title">{t.blog.title}</h2>
          <p className="section-subtitle">{t.blog.subtitle}</p>
        </div>

        <div ref={gridRef} className="blog-grid">
          {blogPosts.map((post, i) => {
            const localizedPost = t.blog.posts[post.id];
            const postTitle = localizedPost?.title || post.title;
            const postDate = localizedPost?.date || post.date;
            const postExcerpt = localizedPost?.excerpt || post.excerpt;
            const postCategory = localizedPost?.category || post.category;

            return (
              <article
                key={post.id}
                className={`blog-card ${gridVis ? 'blog-card--visible' : ''}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="blog-card-top">
                  <span className={`blog-badge blog-badge--${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {postCategory}
                  </span>
                  <time className="blog-date">{postDate}</time>
                </div>

                <h3 className="blog-card-title">
                  <a href={`#blog-post-${post.id}`} className="blog-title-link">
                    {postTitle}
                  </a>
                </h3>

                <p className="blog-card-excerpt">{postExcerpt}</p>

                <div className="blog-card-bottom">
                  <a href={`#blog-post-${post.id}`} className="blog-read-more" aria-label={`${t.blog.readMore} ${postTitle}`}>
                    <span>{t.blog.readMore}</span>
                    <span className="blog-read-more-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
