import React from "react";
import NavBar from "../component/NavBar";
import Hero from "../component/Hero";
import Features from "../component/Features";

function Home() {
  return (
    <div>
      <NavBar />
      <main className="">
        <Hero />
        <div className="">
          <Features />
        </div>
      </main>
    </div>
  );
}

export default Home;
