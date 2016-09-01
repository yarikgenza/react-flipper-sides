import React from 'react';
import { BACK_STYLE } from '../utils/styles';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

const Back = ({ children }) => (
  <div style={BACK_STYLE} >
    {children}
  </div>
);

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
