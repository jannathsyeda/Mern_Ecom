import Footers from "./Components/Footers";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderScreens from "./Screens/HeaderScreens";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShipingScreen from "./Screens/ShippingScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-2">
        <Container>
          <Routes>
            <Route path="/"  element={<HeaderScreens />} exact />
            <Route path="/signup"  element={<RegisterScreen/>}/>
            <Route path="/profile"  element={<ProfileScreen/>}/>
            <Route path="/login"  element={<LoginScreen/>}/>
            <Route path="/shipping"  element={<ShipingScreen/>}/>

             <Route path="/product/:id" element={<ProductScreen />} />
             <Route path="/cart"  element={<CartScreen/>}/>
          </Routes>
        </Container>
      </main>
      <Footers />
    </Router>
  );
}

export default App;
