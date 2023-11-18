import { Hero, Navbar, TechStack } from "./components";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-sky-100 h-[115px] sm:h-[69px]"></div>
      <Hero></Hero>
      <TechStack></TechStack>
      {/* <ToEndTechStackFloatBtn /> */}
    </>
  );
}

export default App;
