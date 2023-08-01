import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import Topbar from "./components/Header/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
