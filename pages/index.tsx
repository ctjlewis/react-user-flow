import Head from "next/head";

import { Cards } from "components/Cards";
import { Footer } from "components/Footer";
import { WelcomeMessage } from "components/WelcomeMessage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <WelcomeMessage />
        <Cards />
      </main>

      <Footer />
    </>
  );
}
