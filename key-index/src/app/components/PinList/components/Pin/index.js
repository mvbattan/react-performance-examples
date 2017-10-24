import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Pin({ isPainted, tag, onClick }) {
  return (
    <div className={isPainted ? 'painted' : 'unpainted'}>
      <button onClick={onClick}>{tag}</button>
    </div>
  );
}

Pin.propTypes = {
  isPainted: PropTypes.bool.isRequired,
  tag: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Pin;
