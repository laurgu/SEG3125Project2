
import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'
import Home from "./Components/Home"
import Visit from "./Components/Visit"
import Exhibitions from './Components/Exhibitions'
import Collection from './Components/Collection'
import About from './Components/About'
import Donate from './Components/Donate'
import Tickets from './Components/Tickets'
import Contact from './Components/Contact'

function App() {
  return ( 
    <Router basename="/SEG3125Project2">
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/visit" element={<Visit />} />
      <Route path ="/exhibitions" element={<Exhibitions />} />
      <Route path = '/collection' element ={<Collection />} />
      <Route path = '/about' element ={<About />} />
      <Route path = '/donate' element ={<Donate />} />
      <Route path = '/tickets' element ={<Tickets />}/>
      <Route path = '/contact' element ={<Contact />}/>
    </Routes>
  </Router>
  );
}

export default App;