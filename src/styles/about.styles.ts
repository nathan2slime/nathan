import styled from 'styled-components';

import { puff } from '../global/animations';

export const AboutWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  background: linear-gradient(
      ${({ theme }) => theme.backgroundColor}10,
      ${({ theme }) => theme.backgroundColor}10
    ),
    url(/assets/images/about.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;

  section {
    padding: 20px 30px;

    h2 {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.textColorDown};
    }
  }

  @media (min-width: 700px) {
    animation: ${puff} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    border-radius: 20px 0px 0px 20px;
  }
`;
