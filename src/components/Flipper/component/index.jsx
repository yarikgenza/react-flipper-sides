import PropTypes from 'prop-types';
import React from 'react';
import FlipperContainer from '../components-styled/FlipperContainer';
import FlipperWrapper from '../components-styled/FlipperWrapper';

const propTypes = {
  animationProgress: PropTypes.number,
  children: PropTypes.any.isRequired,
};

const defaultProps = {
  animationProgress: 0,
};

const Flipper = ({ animationProgress, children }) => (
  <FlipperWrapper>
    <FlipperContainer animationProgress={animationProgress} >
      {children}
    </FlipperContainer>
  </FlipperWrapper>
);

Flipper.propTypes = propTypes;
Flipper.defaultProps = defaultProps;

export default Flipper;
