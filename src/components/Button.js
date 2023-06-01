import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, className = 'side-color', clickEvent }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => clickEvent(name)}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

export default Button;
