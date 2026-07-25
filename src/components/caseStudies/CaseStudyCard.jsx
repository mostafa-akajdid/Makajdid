import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { extractColorFromImage } from "../../utils/extractColor";

const CaseStudyCard = ({ slug, title, description, stack, image }) => {
  const [gradient, setGradient] = useState(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!imgRef.current) return

    if (imgRef.current.complete) {
      extractColorFromImage(image).then(setGradient)
    } else {
      const handleLoad = () => extractColorFromImage(image).then(setGradient)
      const el = imgRef.current
      el.addEventListener('load', handleLoad)
      return () => el.removeEventListener('load', handleLoad)
    }
  }, [image])

  return (
    <Link to={`/projects/${slug}`} className="case-study-card">
      <div
        className="case-study-card__image-wrapper"
        style={gradient ? { background: gradient } : undefined}
      >
        <img
          ref={imgRef}
          src={image}
          alt={`${title} project screenshot`}
          className="case-study-card__image"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="case-study-card__panel">
        <div className="case-study-card__info">
          <div className="case-study-card__logo">
            <span className="case-study-card__logo-letter">
              {title.charAt(0)}
            </span>
          </div>
          <div className="case-study-card__text">
            <h3 className="case-study-card__title">{title}</h3>
            <p className="case-study-card__description">{description}</p>
            <p className="case-study-card__stack">{stack.join(' · ')}</p>
          </div>
        </div>

        <span className="case-study-card__cta" aria-label={`View ${title} case study`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
