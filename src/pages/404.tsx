import { Triangle } from 'react-loader-spinner';
import Link from 'next/link';
import Head from 'next/head';

import { NotFoundWrapper } from '../styles/404.styles';

import theme from '../global/theme';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Head>
        <title>404</title>
      </Head>

      <Triangle height="80" width="80" color={theme.primaryColorUp} visible />

      <span>Not around here</span>

      <Link href="/">GO TO HOME PAGE</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
