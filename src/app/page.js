import Hero from "@/components/Hero";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
