import { ThemeProvider } from 'next-themes';
import Layout from '../layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
