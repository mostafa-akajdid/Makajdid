import { useState, useRef, useEffect, memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { extractColorFromImage } from "../../utils/extractColor";

const CaseStudyCard = ({ slug, title, subtitle, description, stack, image }) => {
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
    <Link to={`/projects/${slug}`} className="case-study-card--prototype" aria-label={`View ${title} case study`}>
      <div className="prototype__image-zone">
        <div
          className="prototype__image-bg"
          style={gradient ? { background: gradient } : undefined}
        />
        <img
          ref={imgRef}
          src={image}
          alt={`${title} project screenshot`}
          className="prototype__image"
          loading="lazy"
          decoding="async"
        />
        <span className="prototype__seal">
          <span className="prototype__badge">{title.charAt(0)}</span>
          <span className="prototype__seal-title">{title}</span>
          <span className="prototype__seal-arrow" aria-hidden="true">→</span>
        </span>
      </div>
      <div className="prototype__content">
        <p className="prototype__value">{subtitle || description}</p>
        <p className="prototype__tech">{stack.join(' · ')}</p>
      </div>
    </Link>
  );
};

CaseStudyCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};

export default memo(CaseStudyCard);
