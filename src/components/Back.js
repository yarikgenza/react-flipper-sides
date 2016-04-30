import React from 'react';
import { BACK_STYLE } from '../utils/styles';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

export function Back(props) {
  return (
    <div style={BACK_STYLE} >
      {props.children}
    </div>
  );
}

Back.propTypes = propTypes;
Back.defaultProps = defaultProps;
