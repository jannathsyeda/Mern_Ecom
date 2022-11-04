import Footers from './Components/Footers'
import Header from './Components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter , Routes,Route } from "react-router-dom";

import HeaderScreens from './Screens/HeaderScreens'
import ProductScreen from './Screens/ProductScreen';
function App() {
  return (
    <>
      <Header />
      <main className="my-2">
        <Container>
          <BrowserRouter>
          <Routes>
                        <Route path='/' element={<HeaderScreens/>} />

            <Route path='/product/:id' element={<ProductScreen/>} />
   
       </Routes>
       </BrowserRouter>
        </Container>
      </main>
      <Footers />
    </>
  )
}

export default App
