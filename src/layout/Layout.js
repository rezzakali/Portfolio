import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rezzak Ali | Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="../assets/e.png" />
      </Head>
      <Navbar />
      <main className="mt-[80px]">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
