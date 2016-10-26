import styled from 'styled-components';
import { FRONT_BACK_WEB, MAXIMIZED_WEB } from '../../../../utils/styles';

export default styled.div`
  ${MAXIMIZED_WEB}
  ${FRONT_BACK_WEB}
  position: absolute;
  transform: rotateY(180deg);
`;
