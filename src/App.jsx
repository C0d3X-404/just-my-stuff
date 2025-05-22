import { BrowserRouter,Routes, Route} from 'react-router-dom'

import Home from './pages/home/home'

import About from './pages/about/about'
import Contact from './pages/contact/contact';
import Favourites from './pages/favourites/favourites'


import './App.css'
import Navbar from './pages/navbar/navbar'
import './pages/navbar/navbar.css'
import ProductPage from './pages/products/productpage'
import './pages/products/productPage.css'

function App() {



  return (
    <>
      
      <BrowserRouter basename='/just-my-stuff/'>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    


    </>
  )
}

export default App

