import React from 'react';
import FrontContainer from '../components-styled/FrontContainer';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

const Front = ({ children }) => (
  <FrontContainer>
    {children}
  </FrontContainer>
);

Front.propTypes = propTypes;
Front.defaultProps = defaultProps;

export default Front;
