import PropTypes from 'prop-types';
import React from 'react';
import FrontContainer from '../components-styled/FrontContainer';

const propTypes = {
  children: PropTypes.any,
};

const defaultProps = {
  children: null,
};

const Front = ({ children }) => (
  <FrontContainer>
    {children}
  </FrontContainer>
);

Front.propTypes = propTypes;
Front.defaultProps = defaultProps;

export default Front;
