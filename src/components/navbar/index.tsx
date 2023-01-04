import Link from 'next/link';
import { FC, useState } from 'react';
import { MenuOutline } from 'react-ionicons';

import Menu from '../menu';

import { NavbarProps } from './model';
import { DrawerWrapper, NavbarWrapper } from './styles';

const Navbar: FC<NavbarProps> = props => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <NavbarWrapper>
      <Link href="/">
        <img src="/assets/images/chainsaw.jpg" alt="Pochita" />
      </Link>

      <h3>{props.name}</h3>

      <DrawerWrapper open={open} onClick={toggleOpen}>
        <Menu />
      </DrawerWrapper>

      <MenuOutline onClick={toggleOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
