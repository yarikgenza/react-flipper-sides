import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';
import Flipper, { Back, Front } from '../../lib';

storiesOf('Flipper', module)
  .add('front', () => (
    <Flipper animationProgress={0.1}>
      <Front>
        <Text>Front</Text>
      </Front>
      <Back>
        <View
          style={{ flex: 1, backgroundColor: 'blue' }}
        >
          <Text>Back</Text>
        </View>
      </Back>
    </Flipper>
  ))
  .add('back', () => (
    <Flipper animationProgress={0.9}>
      <Front>
        <Text>Front</Text>
      </Front>
      <Back>
        <View
          style={{ flex: 1, backgroundColor: 'blue' }}
        >
          <Text>Back</Text>
        </View>
      </Back>
    </Flipper>
  ));
