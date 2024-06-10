import "./css/style.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Cart, Home, Shop } from "./pages";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
