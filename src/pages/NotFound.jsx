import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Mostafa Akajdid</title>
        <meta
          name="description"
          content="The page you are looking for could not be found. Return to the portfolio of Mostafa Akajdid."
        />
      </Helmet>
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">This project could not be found.</p>
        <Link to="/" className="not-found__link">
          ← Back to Portfolio
        </Link>
      </div>
    </>
  );
};

export default NotFound;
