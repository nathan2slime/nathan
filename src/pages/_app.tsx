import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';

import Menu from '../components/menu';

import theme from '../global/theme';
import 'remixicon/fonts/remixicon.css';
import GlobalStyle from '../global';
import { LayoutApp } from '../styles/app.styles';

const AnimatedCursor: any = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

const clickables = [
  'a',
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  'label[for]',
  'select',
  'textarea',
  'button',
];

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <LayoutApp>
      <Menu />

      <Component {...pageProps} />
    </LayoutApp>

    <AnimatedCursor
      innerSize={20}
      outerSize={30}
      color="91, 209, 156"
      outerAlpha={0.2}
      innerScale={0.7}
      hasBlendMode
      outerScale={1.2}
      clickables={clickables}
    />
  </ThemeProvider>
);

export default App;
