import React from 'react';
import { FRONT_STYLE } from '../utils/styles';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

export const Front = ({ children }) => (
  <div style={FRONT_STYLE} >
    {children}
  </div>
);

Front.propTypes = propTypes;
Front.defaultProps = defaultProps;
