import React from 'react';
import autobind from 'autobind-decorator';
import { Motion, spring, presets } from 'react-motion';
import * as exceptionMethods from 'exception-methods';
import {
  PageSideTypesEnum,
  Flipper,
} from 'react-redux-flipper';
import { isStackOpen } from '../utils/visability-statuses';

const propTypes = {
  stackId: React.PropTypes.any,
  side: React.PropTypes.any,
  children: React.PropTypes.any,
  flippingActions: React.PropTypes.any,
  onOpenDone: React.PropTypes.any,
  onCloseDone: React.PropTypes.any,
};

const defaultProps = {};

export class FlipperManager extends React.Component {

  componentWillReceiveProps(nextProps) {
    switch (nextProps.side) {
      case PageSideTypesEnum.PREPARE_TO_MAIN:
        // case PageSideTypesEnum.GOING_TO_MAIN:
        this.props.flippingActions.goingToMain(this.props.stackId);
        return;
      case PageSideTypesEnum.PREPARE_TO_COVER:
        // case PageSideTypesEnum.GOING_TO_COVER:
        this.props.flippingActions.goingToCover(this.props.stackId);
        return;
      default:
        return;
    }
  }

  // TODO: use in proper place
  @autobind
  onFlippingTransitionEnd() {
    // e.stopPropagation();
    switch (this.props.side) {
      case PageSideTypesEnum.GOING_TO_MAIN:
        this.props.flippingActions.goToMainDone(this.props.stackId);
        if (this.props.onOpenDone) {
          this.props.onOpenDone();
        }
        return;
      case PageSideTypesEnum.GOING_TO_COVER:
        this.props.flippingActions.goToCoverDone(this.props.stackId);
        if (this.props.onCloseDone) {
          this.props.onCloseDone();
        }
        return;
      default:
        if (process.env.NODE_ENV !== 'production') {
          throw exceptionMethods.rangeException('side', this.props.side);
        }
        return;
    }
  }

  render() {
    const motionStyle = {
      rotateValue: spring(isStackOpen(this.props.side) ? 0 : 1, presets.noWobble),
    };
    return (
      <Motion style={motionStyle} onRest={this.onFlippingTransitionEnd} >
        {(motionProps) => (
          <Flipper animationProgress={motionProps.rotateValue} >
            {this.props.children}
          </Flipper>
        )}
      </Motion>
    );
  }
}

FlipperManager.propTypes = propTypes;
FlipperManager.defaultProps = defaultProps;
