import Footers from "./Components/Footers";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderScreens from "./Screens/HeaderScreens";
import ProductScreen from "./Screens/ProductScreen";
import Cart from "./Components/Cart";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-2">
        <Container>
          <Routes>
            <Route path="/"  element={<HeaderScreens />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signIn" element={<Login/>} />

          </Routes>
        </Container>
      </main>
      <Footers />
    </Router>
  );
}

export default App;
