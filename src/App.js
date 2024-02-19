import React from 'react'

import { Footer, About, Blog, Header} from './containers';
import { Brand, Cart, CTA, Trending, Menu, Navbar, Product} from './components';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className= "gradient__bg">
          <Navbar />
          <Header />
          <Cart />
      </div>
          <About />
          <Blog />
          <Header />
          <Trending />
          <Brand />
          <Product />
          <CTA />
          <Footer />
    </div>
  )
}

export default App