import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import Layout from '../layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.remove();
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
