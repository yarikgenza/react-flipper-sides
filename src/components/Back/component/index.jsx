import PropTypes from 'prop-types';
import React from 'react';
import BackContainer from '../components-styled/BackContainer';

const propTypes = {
  children: PropTypes.any.isRequired,
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
