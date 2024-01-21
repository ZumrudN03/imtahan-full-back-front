import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import OurMenu from "../../components/OurMenu/OurMenu";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderSection/>
      <OurMenu/>
    </div>
  );
}

export default Home;
