import styled from 'styled-components';

type DrawerStyledProps = {
  open: boolean;
};

export const NavbarWrapper = styled.div`
  width: 100%;
  position: sticky;
  background: ${({ theme }) => theme.foregroundColorDown}e8;
  backdrop-filter: blur(2px);
  border-bottom: 1px solid ${({ theme }) => theme.foregroundColorDown}15;
  height: 80px;
  z-index: 11;
  border-radius: 0px 0px 5px 5px;
  top: -1px;

  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }

  > a img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  h3 {
    color: ${({ theme }) => theme.textColorUp};
    font-size: 1rem;
  }

  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    span {
      display: grid;
      place-items: center;
    }
  }

  svg {
    width: 18px;
    height: 18px;

    cursor: pointer;
    fill: ${({ theme }) => theme.textColorUp};
    color: ${({ theme }) => theme.textColorUp};
    transition: all 0.3s;

    &:hover {
      fill: ${({ theme }) => theme.secondaryColorUp};
      color: ${({ theme }) => theme.secondaryColorUp};
    }
  }

  > span svg {
    width: 27px;
    height: 27px;

    display: flex;

    @media (min-width: 700px) {
      display: none;
    }
  }
`;

export const DrawerWrapper = styled.div<DrawerStyledProps>`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: all 0.15s;
  top: 0px;
  z-index: 11;
  right: 0px;
  background: ${({ theme }) => theme.foregroundColorDown}50;

  > div {
    display: flex;
    width: 270px;
    transform: translateX(${({ open }) => (open ? 0 : -2000)}px);
    border-radius: 10px 0px 0px 10px;
  }
`;
