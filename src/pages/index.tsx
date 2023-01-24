import Head from 'next/head';
import Navbar from '../components/navbar';

import { IndexWrapper } from '../styles/index.styles';

const Index = () => {
  return (
    <IndexWrapper>
      <Head>
        <title>Home | Francisco Cajlon</title>
      </Head>

      <Navbar name="Home" />

      <section>
        <h2>Hi, welcome 🖐️</h2>

        <p>
          My name is <strong>Francisco Cajon Jhonathan Moura Batista</strong>,
          but i prefer to be called <i>Jhonathan</i>, as it is easier and faster
          to introduce yourself.
        </p>

        <p>
          I really like <u>programming</u>, <u>reading</u>, listening to{' '}
          <u>music</u>, watching <u>anime</u>, <u>series</u> and <u>movies</u>.
          If you want to talk about any of these subjects, please contact me !!!
        </p>

        <p>
          Here you can see my projects and know a little about the things I like
        </p>
      </section>
    </IndexWrapper>
  );
};

export default Index;
