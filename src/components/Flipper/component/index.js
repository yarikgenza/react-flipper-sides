import React from 'react';
import { STACK_FLIPPER, STACK_CONTAINER } from '../utils/styles';

const propTypes = {
  animationProgress: React.PropTypes.number,
  children: React.PropTypes.any,
};

const defaultProps = {
  animationProgress: 0,
};

export class Flipper extends React.Component {

  getStackContainerStyle(animationProgress) {
    const rotate = animationProgress * 180;
    return Object.assign({}, STACK_CONTAINER, {
      transform: `rotate3d(0, 1, 0, ${rotate}deg)`,
      WebkitTransform: `rotate3d(0, 1, 0, ${rotate}deg)`,
    });
  }

  render() {
    const stackContainerStyle = this.getStackContainerStyle(this.props.animationProgress);
    return (
      <div style={STACK_FLIPPER} >
        <div style={stackContainerStyle} >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Flipper.propTypes = propTypes;
Flipper.defaultProps = defaultProps;
