import Header from "@components/shared/commons/Header/Header";
import Home from "@components/Home/Home";
import SideNav from "@components/SideNav/SideNav";
import { useState } from "react";

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <Header
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <SideNav isOpen={isSideNavOpen} />
      <Home />
    </>
  );
}

export default App;
