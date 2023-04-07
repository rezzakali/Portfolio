import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rezzak Ali | Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="mt-[80px]">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
