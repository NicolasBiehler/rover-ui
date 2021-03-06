import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Chevron = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
  </svg>
);
Chevron.propTypes = { fill: PropTypes.string };
Chevron.defaultProps = { fill: iconColorsMap.mainicon };

export default Chevron;
