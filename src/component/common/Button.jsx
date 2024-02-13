import PropTypes from 'prop-types';
import '../../../src/assets/styles/Button.css'; 

const Button = ({ type, className, onClick, children, loading }) => {
  return (
    <button
      type={type}
      className={`button_style ${className}`}
      onClick={onClick}
      disabled={loading} // Disable button when loading is true
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Button type prop validation
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, // Children prop validation for button label
  loading: PropTypes.bool, // Loading prop validation
};

export default Button;
