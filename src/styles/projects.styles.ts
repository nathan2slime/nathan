import styled from 'styled-components';

import { puff } from '../global/animations';

export const ProjectsWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(
      ${({ theme }) => theme.backgroundColor}10,
      ${({ theme }) => theme.backgroundColor}10
    ),
    url(/assets/images/movie.jpg);
  background-size: cover;
  background-position: center;

  > section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 20px;
    padding: 20px;
  }

  @media (min-width: 700px) {
    animation: ${puff} 0.15s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    border-radius: 20px 0px 0px 20px;
  }
`;
