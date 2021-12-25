import { Routes, Route } from "react-router-dom";

import Navbar from "../components/ui/Navbar";

import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import HeroScreen from "../components/hero/HeroScreen";

const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      <div className="px-4 xl:px-0 | lg:max-w-screen-lg xl:max-w-screen-xl | my-0 mx-auto">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />

          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroId" element={<HeroScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRouter;
