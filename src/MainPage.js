import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Details from "./Details";
import Achievements from "./Achievements";
import LastElegance from "./LastElegance";
import Footer from "./Footer";

const MainPage = (props) => {
  return (
    <>
      <Header isNavbarActive={props.isNavbarActive} />
      <main>
        <article>
          <Hero />
          <Details />
          <Achievements />
          <LastElegance />
          <Footer />
        </article>
      </main>
    </>
  );
};

export default MainPage;
