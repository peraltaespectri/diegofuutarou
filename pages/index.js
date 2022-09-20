import Head from "next/head";

import Hero from "../components/hero"
import Languages from "../components/languages"
import Footer from "../components/footer"

export default function Home() {

const description = "Um desenvolvedor com poucas habilidades"
const pageTitle = "Diego Fuutarou"
const siteName = "Diego Fuutarou"



  return (
    <div>
      <Head>
      <title>{pageTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Um desenvolvedor com poucas habilidades" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta name="twitter:creator" content="@diegofuutarou" key="twhandle" />
        

        {/* Open Graph */}
        <meta property="og:url" content="https://diegofuutarou.vercel.app" key="ogurl" />
        <meta property="og:image" content="https://i.ibb.co/sHcLzB4/Fuutarou-icon.jpg" key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
                
      </Head>

      <Hero />
      <Languages />
      <Footer />
    </div>
  );
}
