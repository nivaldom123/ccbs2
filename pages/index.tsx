import React from "react";
import NextSEO from "layout/nextseo";
import type { NextPage } from "next";
import LandingPage from "containers/landing";
import LandingProvider from "context/landing";

const Home: NextPage = () => {
  return (
    <LandingProvider>
      <NextSEO
        title={"Portal do Money"}
        description={"Um aplicativo de troca de moeda em tempo real"}
      />
      <LandingPage />
    </LandingProvider>
  );
};

export default Home;
