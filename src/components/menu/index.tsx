import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  LogoInstagram,
  LogoGithub,
  LogoTwitter,
  LogoLinkedin,
} from 'react-ionicons';

import { MenuItem, MenuWrapper } from './styles';

const Menu = () => {
  const router = useRouter();

  if (router.route == '/404') return <div />;

  const items = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/projects',
      title: 'Projects',
    },
  ];

  const links = [
    {
      path: 'https://github.com/nathan2slime',
      child: <LogoGithub />,
    },
    {
      path: 'https://instagram.com/cajlonbatista',
      child: <LogoInstagram />,
    },
    {
      path: 'https://twitter.com/cajlonbatista',
      child: <LogoTwitter />,
    },
    {
      path: 'https://www.linkedin.com/in/francisco-cajlon-jhonathan-moura-batista-20b9651aa/',
      child: <LogoLinkedin />,
    },
  ];

  return (
    <MenuWrapper>
      <div>
        <img src="/assets/images/chainsaw.jpg" alt="Pochita" />

        <h1>Francisco Cajlon</h1>

        <p>Software Engineer</p>
      </div>

      <section>
        {items.map(item => (
          <MenuItem
            key={item.path}
            href={item.path}
            active={+(router.pathname == item.path)}
          >
            {item.title}
          </MenuItem>
        ))}
      </section>

      <div>
        {links.map(link => (
          <Link key={link.path} href={link.path} target="_blank">
            {link.child}
          </Link>
        ))}
      </div>
    </MenuWrapper>
  );
};

export default Menu;
