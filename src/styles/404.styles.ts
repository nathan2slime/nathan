import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    margin-top: 35px;
    margin-bottom: 15px;
  }

  a,
  span {
    font-size: 0.875rem;
    text-align: center;
    color: ${({ theme }) => theme.textColorDown};
  }

  a {
    font-weight: 600;
    transition: all 0.3s;
    padding: 10px 20px;
    &:hover {
      color: ${({ theme }) => theme.primaryColorDown};
    }
  }
`;
