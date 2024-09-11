
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs  from "./Routes/Favs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
