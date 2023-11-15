// import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  // const [navHeight, setNavHeight] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      {/* <div className="h-[113px] sm:h-[68px] bg-sky-100"></div> */}
      <Hero></Hero>
    </>
  );
}

export default App;
