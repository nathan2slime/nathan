import Head from 'next/head';
import Navbar from '../components/navbar';

import { IndexWrapper } from '../styles/index.styles';

const Index = () => {
  return (
    <IndexWrapper>
      <Head>
        <title>Francisco Cajlon</title>
      </Head>

      <Navbar name="Home" />
    </IndexWrapper>
  );
};

export default Index;
