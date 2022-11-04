import Footers from './Components/Footers'
import Header from './Components/Header'
import { Container } from 'react-bootstrap'
import HeaderScreens from './Screens/HeaderScreens'
function App() {
  return (
    <>
      <Header />
      <main className="my-2">
        <Container>
       <HeaderScreens/>
        </Container>
      </main>
      <Footers />
    </>
  )
}

export default App
