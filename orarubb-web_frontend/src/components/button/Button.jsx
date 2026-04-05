import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  color,
  label,
  onClick,
  shape = "rounded",
  size = "medium",
  to,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`padding-2 shadow-none hover:shadow background-light-${color} hover:background-dark-${color} ${shape} ${size}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
