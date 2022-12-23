import Link from 'next/link';
import styled from 'styled-components';

import { fadeInLeft, pulse } from '../../global/animations';

type MenuItemStyledProps = {
  active: number;
};

export const MenuWrapper = styled.div`
  display: none;
  max-width: 300px;
  height: 100vh;
  background: ${({ theme }) => theme.foregroundColorDown};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  padding: 40px 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeInLeft} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  > div,
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:first-child {
      img {
        width: 90px;
        height: 90px;
        border-radius: 10px;
      }

      h1 {
        color: ${({ theme }) => theme.textColorDown};
        font-size: 1.2rem;
        margin-top: 20px;
        margin-bottom: 8px;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.textColorDown};
    font-size: 0.845rem;
    text-align: center;
  }

  > div:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;

    svg {
      fill: ${({ theme }) => theme.textColorDown};
      color: ${({ theme }) => theme.textColorDown};
      transition: all 0.3s;

      &:hover {
        fill: ${({ theme }) => theme.secondaryColorUp};
        color: ${({ theme }) => theme.secondaryColorUp};
      }
    }
  }

  section {
    gap: 8px;
  }

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const MenuItem = styled(Link)<MenuItemStyledProps>`
  width: fit-content;
  height: 30px;
  border-radius: 5px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  color: ${({ theme, active }) =>
    active == 1 ? theme.textColorUp : theme.textColorDown};
  background: ${({ theme, active }) =>
    active == 1 ? theme.primaryColorUp : 'transparent'};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: 0.835rem;

  &:hover {
    animation: ${pulse} 1.5s ease-in-out infinite both;
    color: ${({ theme, active }) =>
      active == 1 ? theme.textColorUp : theme.secondaryColorUp};
  }
`;
