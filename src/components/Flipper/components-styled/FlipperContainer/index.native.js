import styled from 'styled-components/native';

export default styled.View.attrs({
  style: props => ({
    transform: [
      { perspective: 1000 },
      { rotateY: `${props.animationProgress * 180}deg` },
    ],
  }),
})`
  flex: 1;
  background-color: green;
`;
