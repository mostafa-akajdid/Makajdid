import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">This project could not be found.</p>
      <Link to="/" className="not-found__link">
        ← Back to Portfolio
      </Link>
    </div>
  );
};

export default NotFound;
