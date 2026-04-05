import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ title, subtitle, link }) => {
  return (
    <div>
      <Link to={link} className="card">
        <h3 className="card-title">{title}</h3>
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Card;
