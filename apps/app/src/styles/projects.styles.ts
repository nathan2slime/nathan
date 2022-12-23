import styled from 'styled-components';

import { puff } from '../global/animations';

export const ProjectsWrapper = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.backgroundColor};
  animation: ${puff} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
`;
