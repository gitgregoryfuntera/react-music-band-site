import Header from "@components/shared/commons/Header/Header";
import Home from "pages/Home/Home";
import SideNav from "@components/shared/commons/SideNav/SideNav";
import { useState } from "react";
import Networks from "@components/shared/commons/Networks/Networks";
import StayInTouch from "@components/shared/commons/StayInTouch/StayInTouch";
import Footer from "@components/shared/commons/Footer/Footer";
import { Routes, Route, Outlet } from "react-router-dom";
import ThemeContextProvider from "@components/shared/context/ThemeContext";
import Discography from "pages/Discography/Discography";
import SingleAlbum from "pages/Discography/SingleAlbum";

const App = () => {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/discography/:id" element={<SingleAlbum />} />
        </Route>
      </Routes>
    </ThemeContextProvider>
  );
};

export const Layout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <Header
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <SideNav isOpen={isSideNavOpen} />
      <main>
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
        <Outlet />
        <Networks />
        <StayInTouch />
      </main>
      <Footer />
    </>
  );
};

export default App;
