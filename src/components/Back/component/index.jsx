import PropTypes from 'prop-types';
import React from 'react';
import BackContainer from '../components-styled/BackContainer';

const propTypes = {
  children: PropTypes.any,
};

const defaultProps = {
  children: null,
};

const Back = ({ children }) => (
  <BackContainer>
    {children}
  </BackContainer>
);

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;

export default Back;
