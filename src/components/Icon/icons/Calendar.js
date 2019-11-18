import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Calendar = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2h-2zm3 18H5V9h14v11z" />
  </svg>
);
Calendar.propTypes = { fill: PropTypes.string };
Calendar.defaultProps = { fill: iconColorsMap.mainicon };

export default Calendar;
