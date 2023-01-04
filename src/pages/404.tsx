import Link from 'next/link';
import Head from 'next/head';

import { NotFoundWrapper } from '../styles/404.styles';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Head>
        <title>Page not found | Francisco Cajlon</title>
      </Head>

      <div>
        <span>Page not found</span>

        <Link href="/">Go to home page</Link>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
