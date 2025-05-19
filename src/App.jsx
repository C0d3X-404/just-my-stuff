import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { HashRouter as Router } from "react-router-dom";
import Home from './pages/home/home'
import Watch from './pages/product/watch/watch'
import Jacket from './pages/product/jacket/jacket'


import './App.css'
import Navbar from './pages/navbar/navbar'
import './pages/navbar/navbar.css'

function App() {



  return (
    <>
      
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/jacket" element={<Jacket />} />
        </Routes>
      </BrowserRouter>
    


    </>
  )
}

export default App
