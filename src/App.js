import Wallet  from "./Component/Wallet";
import './App.css';
import Graph from './Component/Graph';
import Navigation_Bar from './Component/Navbar/Navigation_Bar';
import Right from './Component/RightSection/Right';
import EmbeddedMediumPage from "./Component/Organization/EmbeddedMediumPage";
// import CarbonCell from "./Component/CarbonCell";
import MetaMask from "./Component/MetaMask/MetaMask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Assets from "./Component/Assets/Assets";
import Navbar2 from "./Component/NavBar2/Navbar2";
import HamBurgerPage from "./Component/HamBurger_Page/HamBurgerPage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/organization" element={<EmbeddedMediumPage />} />
        <Route path="/assets" element={<Assets/>} />
        <Route path="/trade" element={<Home/>} />
        <Route path="/history" element={<Home/>} />
        <Route path="/wallet" element={<MetaMask/>} />
        <Route path="/Hamburger" element={<HamBurgerPage/>} />
        <Route path="*" element={"No route available"} />
    </Routes>
  </BrowserRouter>
  
  {/* <HamBurgerPage/> */}
  {/* <Navbar2/> */}
      {/* <Graph/> */}
      {/* <Wallet/> */}
      {/* <EmbeddedMediumPage/> */}
      {/* <CarbonCell/> */}
      {/* <MetaMask/> */}


    </div>
  );
}

export default App;
