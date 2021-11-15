import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./components/Home/Home";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from "./Route/Routing";
import Loding from "./components/Loding/Loding";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About/About";
import Success from "./components/Success/Success";
import { Routes, Route } from "react-router-dom";
function App() {
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoding(true);
    }, 3000);
  }, []);

  return loding ? (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route path="/" element={<Routing />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  ) : (
    <Loding />
  );
}

export default App;
