import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(
      ${({ theme }) => theme.foregroundColorDown}40,
      ${({ theme }) => theme.foregroundColorDown}40
    ),
    url(/assets/images/404.jpg);
  background-size: cover;
  background-position: center;

  &,
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      margin-top: 20px;
      margin-bottom: 15px;
    }

    a,
    span {
      font-size: 0.875rem;
      font-weight: 600;
      text-align: center;
      color: ${({ theme }) => theme.textColorUp};
    }

    span {
      font-size: 1.3rem;
    }

    a {
      transition: all 0.3s;
      padding: 10px 20px;
      width: 100%;
      overflow: hidden;
      max-width: 400px;
      background: ${({ theme }) => theme.backgroundColor}30;
      backdrop-filter: blur(10px);
      border-radius: 8px;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.primaryColorDown};
      }
    }
  }
`;
