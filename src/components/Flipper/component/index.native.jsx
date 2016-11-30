import React from 'react';
import FlipperContainer from '../components-styled/FlipperContainer';
import FlipperWrapper from '../components-styled/FlipperWrapper';

const propTypes = {
  animationProgress: React.PropTypes.number,
  children: React.PropTypes.any,
};

const defaultProps = {
  animationProgress: 0,
};

export default class Flipper extends React.Component {

  getStackContainerStyle(animationProgress) {
    const rotate = animationProgress * 180;
    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${rotate}deg` },
      ],
    };
  }

  render() {
    const { animationProgress, children } = this.props;
    const stackContainerStyle = this.getStackContainerStyle(animationProgress);
    return (
      <FlipperWrapper>
        <FlipperContainer style={stackContainerStyle} >
          {animationProgress < 0.5 ? children[0] : children[1]}
        </FlipperContainer>
      </FlipperWrapper>
    );
  }
}

Flipper.propTypes = propTypes;
Flipper.defaultProps = defaultProps;
