import PropTypes from 'prop-types';
import '../../../src/assets/styles/Input.css'; 

const Input = ({ type, name, className, placeholder, value,onBlur, onChange, errorMessage}) => {
 
  return (
    <span className='input_div'>
  <input
    type={type}
    name={name}
    className={`input_style ${className}`}
    placeholder={placeholder}
    value={value || ""} 
    onChange={onChange} 
    onBlur={onBlur}
  />
  {errorMessage && <div className={`error ${errorMessage?"visiblity":"hidden"}`}>{errorMessage}</div>}
</span>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  errorMessage: PropTypes.string, // New prop for error message
};

export default Input;
