import Catalogue from "@/components/Catalogue";
import Hero from "@/components/Hero";

import SuspendedCatalogue from "@/components/Catalogue";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Loading />
      <Hero />
      {/* <Catalogue /> */}
    </>
  );
}
