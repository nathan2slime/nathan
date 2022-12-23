import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Menu from '../components/menu';

import theme from '../global/theme';
import GlobalStyle from '../global';
import { LayoutApp } from '../styles/app.styles';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <LayoutApp>
      <Menu />

      <Component {...pageProps} />
    </LayoutApp>
  </ThemeProvider>
);

export default App;
