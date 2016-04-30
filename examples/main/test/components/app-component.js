import React from 'react';
import {
  PageSideTypesEnum,
  Front,
  Back,
} from 'react-redux-flipper';
import FlipperManagerContainer from '../container/FlipperManagerContainer';

export default class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.props.appActions.loadStacks([{
      side: PageSideTypesEnum.MAIN,
      id: 'personalMyCardsId',
    }]);
  }

  render() {
    const width = 400;
    const height = 600;
    const time = 0.2;
    const style = {
      position: 'absolute',
      width: '400px',
      height: '500px'
    };
    const frontStyle = {
      backgroundColor: 'red',
      width: '100%',
      height: '100%',
    };
    const backStyle = {
      backgroundColor: 'blue',
      width: '100%',
      height: '100%',
    };
    const stack = this.props.stacks[0];
    if (!stack) {
      return (<div></div>);
    }
    return (
      <div>
        <span onClick={this.props.appActions.flipApp}>Flip</span>
        <div style={ style }>
          <FlipperManagerContainer
            cardsActions={{}}
            width={width}
            height={height}
            time={time}
            side={stack.side}
            stackId={stack.id}
            onOpenDone={function() { }}
            onCloseDone={function() { }}
          >
            <Front>
              <div style={ frontStyle } >{'Front'}</div>
            </Front>
            <Back >
              <div style={ backStyle } >{'Back'}</div>
            </Back>
          </FlipperManagerContainer>
        </div>
      </div>
    );
  }
}
