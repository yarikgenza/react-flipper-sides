import React from 'react';
import { FRONT_STYLE } from '../utils/styles';

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

export function Front(props) {
  return (
    <div style={FRONT_STYLE} >
      {props.children}
    </div>
  );
}

Front.propTypes = propTypes;
Front.defaultProps = defaultProps;
