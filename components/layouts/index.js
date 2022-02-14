import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";

const Layouts = ({ children }) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>Iujo | Barquisimeto</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Pagina educacional de Iujo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {route.asPath === "/" || <Header />}
      <main className="main">
        {children}
      </main>
      <Footer/>
    </>);
};

export default Layouts;
