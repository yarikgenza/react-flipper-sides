import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Back, Flipper, Front } from 'react-flipper-sides';

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
