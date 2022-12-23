import styled from 'styled-components';

import { puff } from '../global/animations';

export const IndexWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.backgroundColor};
  animation: ${puff} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
