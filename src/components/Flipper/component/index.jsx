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
      transform: `rotate3d(0, 1, 0, ${rotate}deg)`,
      WebkitTransform: `rotate3d(0, 1, 0, ${rotate}deg)`,
    };
  }

  render() {
    const stackContainerStyle = this.getStackContainerStyle(this.props.animationProgress);
    return (
      <FlipperWrapper>
        <FlipperContainer style={stackContainerStyle} >
          {this.props.children}
        </FlipperContainer>
      </FlipperWrapper>
    );
  }
}

Flipper.propTypes = propTypes;
Flipper.defaultProps = defaultProps;
