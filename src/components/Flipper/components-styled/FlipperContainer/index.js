import styled from 'styled-components';

export default styled.div.attrs({
  style: props => ({
    transform: `rotate3d(0, 1, 0, ${props.animationProgress * 180}deg)`,
    WebkitTransform: `rotate3d(0, 1, 0, ${props.animationProgress * 180}deg)`,
  }),
})`
  height: 100%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
`;
