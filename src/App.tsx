import Header from "@components/shared/commons/Header/Header";
import Home from "@components/Home/Home";
import SideNav from "@components/shared/commons/SideNav/SideNav";
import { useState } from "react";
import Networks from "@components/shared/commons/Networks/Networks";
import StayInTouch from "@components/shared/commons/StayInTouch/StayInTouch";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <Header
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <SideNav isOpen={isSideNavOpen} />
      <main>
        <Home />
        <Networks />
        <StayInTouch />
      </main>
    </>
  );
}

export default App;
