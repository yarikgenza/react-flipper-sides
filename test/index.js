import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Flipper, { Back, Front } from '../src';

describe('<Flipper /> shallow rendering', () => {
  it('has 2 children', () => {
    const wrapper = shallow(
      <Flipper animationProgress={0.1} >
        <Front>
          <div>Front</div>
        </Front>
        <Back>
          <div>Back</div>
        </Back>
      </Flipper>
    );
    expect(wrapper.children()).to.have.length(1);
  });
});

describe('<Flipper /> full DOM rendering', () => {
  it('has 2 children', () => {
    const wrapper = mount(
      <Flipper animationProgress={0.1} >
        <Front>
          <div>Front</div>
        </Front>
        <Back>
          <div>Back</div>
        </Back>
      </Flipper>
    );
    expect(wrapper.children()).to.have.length(1);
  });
});
