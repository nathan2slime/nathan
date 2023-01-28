import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  background: ${({ theme }) => theme.backgroundColor}80;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  z-index: 10;

  img {
    width: 60px;
  }

  h4 {
    color: ${({ theme }) => theme.primaryColorUp};
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.textColorDown};
    font-size: 0.845rem;
    font-weight: 600;
    margin-top: 5px;
  }

  div {
    display: flex;
  }

  svg {
    fill: ${({ theme }) => theme.textColorDown};
    color: ${({ theme }) => theme.textColorDown};
    transition: all 0.3s;

    &:hover {
      fill: ${({ theme }) => theme.secondaryColorUp};
      color: ${({ theme }) => theme.secondaryColorUp};
    }
  }

  > div:nth-child(2) {
    background: ${({ theme }) => theme.foregroundColorDown}44;
    width: fit-content;
    min-height: 40px;
    flex-wrap: wrap;
    margin: 15px 20px 20px;
    padding: 10px;
    gap: 10px;
    border-radius: 5px;

    i {
      font-size: 22px;
    }

    svg,
    i {
      fill: ${({ theme }) => theme.textColorUp};
      color: ${({ theme }) => theme.textColorUp};
    }

    p {
      font-weight: 800;
    }
  }

  > div:last-child {
    margin-top: 15px;
    padding: 0px 20px 20px;
    justify-content: flex-end;
    gap: 10px;

    span {
      width: 40px;
      height: 40px;
      border: 1px solid transparent;
      background: ${({ theme }) => theme.primaryColorUp}20;
      border-radius: 5px;
      display: grid;
      place-items: center;
      transition: all 0.15s;

      &:hover {
        background: ${({ theme }) => theme.primaryColorUp};

        svg {
          fill: ${({ theme }) => theme.textColorUp};
          color: ${({ theme }) => theme.textColorUp};
        }
      }
    }
  }

  > div:first-child {
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.foregroundColorUp};

    > div {
      padding: 20px 20px 15px;
      align-items: flex-start;
      background: ${({theme}) => theme.primaryColorUp}14;

      > div {
        flex-direction: column;
      }
    }

    > div {
      gap: 20px;
    }

    > p {
      border-radius: 5px;
      font-weight: 400;
      display: block;
      margin: 20px;
    }
  }

  @media (min-width: 600px) {
    width: 380px;
  }

  @media (max-width: 375px) {
    > div:first-child {
      align-items: center;
      flex-direction: column;

      div {
        align-items: center;
      }

      p,
      h4 {
        text-align: center;
      }
    }

    > div:nth-child(2) {
      margin: 15px auto auto;
    }

    > div:last-child,
    > div:nth-child(2) {
      justify-content: center;
      align-items: center;
    }
  }
`;
