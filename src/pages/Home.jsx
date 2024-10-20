import React from "react";
import Navbar from "../components/Home/Navbar";
import Toolkit from "../components/Home/Toolkit";
import Display from "../components/Home/display";
import Newdoc from "../components/Home/Newdoc";

const Home = () => {
  return (
    <div className="py-3 px-6">
      <main>
        <Navbar />
        <Toolkit />
      </main>
      <section>
        <Display />
      </section>
      <Newdoc />
    </div>
  );
};

export default Home;
