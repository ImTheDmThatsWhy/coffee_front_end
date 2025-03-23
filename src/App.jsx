import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Coffee from './Components/Coffees/Coffee'
import Favourites from './Components/Favourites/Favourites'
import LoginRegister from './Components/LoginRegister/LoginRegister'
import Reviews from './Components/Reviews/Reviews'

import "@fontsource/inter"; 





const HomeWithCoffee = () => {
  return (
    <>
      <Home />
      <Coffee />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="parent-container">
        <Nav />
        <Routes>
          <Route path="/" element={<HomeWithCoffee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/account" element={<LoginRegister />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}


export default App