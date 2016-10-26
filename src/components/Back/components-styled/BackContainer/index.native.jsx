import React from 'react';
import { View } from 'react-native';
// import styled from 'styled-components/native';

/*
styled.View`
  flex: 1;
  background-color: blue;
`
*/

const propTypes = {
  children: React.PropTypes.any,
};

const defaultProps = {};

const BackContainer = ({ children }) => (
  <View
    style={{ flex: 1, transform: [{ rotateY: '180deg' }] }}
  >
    {children}
  </View>
);

BackContainer.propTypes = propTypes;
BackContainer.defaultProps = defaultProps;

export default BackContainer;
