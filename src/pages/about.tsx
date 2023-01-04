import Head from 'next/head';

import Navbar from '../components/navbar';

import { AboutWrapper } from '../styles/about.styles';


const About = () => {
  return (
    <AboutWrapper>
      <Head>
        <title>About | Francisco Cajlon</title>
      </Head>

      <Navbar name="About" />
      <section>
        <h2>Hi, welcome 🖐️</h2>
      </section>
    </AboutWrapper>
  );
};

export default About;
