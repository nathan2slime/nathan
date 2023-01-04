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
  background-repeat: no-repeat;
  background-position: top right;

  > section {
    padding: 20px 30px;
    max-width: 540px;

    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.backgroundColor}e6;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    margin-top: 40px;

    h2 {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.primaryColorDown};
      border-bottom: 2px solid ${({ theme }) => theme.textColorDown}40;
      padding-bottom: 10px;
    }

    p {
      color: ${({ theme }) => theme.textColorDown};
      font-size: 0.875rem;
      margin-top: 15px;

      &:last-child {
        color: ${({ theme }) => theme.secondaryColorUp};
      }
    }
  }

  @media (min-width: 700px) {
    animation: ${puff} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    border-radius: 20px 0px 0px 20px;
  }
`;
