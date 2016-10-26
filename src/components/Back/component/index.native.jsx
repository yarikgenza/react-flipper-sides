import React from 'react';
import BackContainer from '../components-styled/BackContainer';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

const Back = ({ children }) => (
  <BackContainer>
    {children}
  </BackContainer>
);

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
