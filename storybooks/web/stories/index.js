import React from 'react';
import infoAddon from '@storybook/addon-info';
import { storiesOf, setAddon } from '@storybook/react';
import Flipper, { Back, Front } from 'react-flipper-sides';

setAddon(infoAddon);

storiesOf('Flipper', module)
  .add('front', () => (
    <Flipper animationProgress={0.1}>
      <Front>
        <div style={{ background: 'red', height: '100%', width: '100%' }}>Front</div>
      </Front>
      <Back>
        <div style={{ background: 'blue', height: '100%', width: '100%' }}>Back</div>
      </Back>
    </Flipper>
  ))
  .add('back', () => (
    <Flipper animationProgress={0.9}>
      <Front>
        <div style={{ background: 'red', height: '100%', width: '100%' }}>Front</div>
      </Front>
      <Back>
        <div style={{ background: 'blue', height: '100%', width: '100%' }}>Back</div>
      </Back>
    </Flipper>
  ));
