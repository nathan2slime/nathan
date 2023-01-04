import styled from 'styled-components';

import { puff } from '../global/animations';

export const IndexWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(
      ${({ theme }) => theme.backgroundColor}10,
      ${({ theme }) => theme.backgroundColor}10
    ),
    url(/assets/images/panda.jpg);
  background-size: cover;
  animation: ${puff} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  background-repeat: no-repeat;
  background-position: top right;
`;
