import React from 'react';
import infoAddon from '@storybook/addon-info';
import { Text, View } from 'react-native';
import { storiesOf, setAddon } from '@storybook/react-native';
import Flipper, { Back, Front } from '../../lib';

setAddon(infoAddon);

storiesOf('Flipper', module)
  .addWithInfo('front', () => (
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
  .addWithInfo('back', () => (
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
