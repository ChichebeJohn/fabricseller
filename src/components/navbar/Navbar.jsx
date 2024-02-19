import React, { useState }from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png'
import './navbar.css';

const Menu = () => 
<>
<p><a href="#home">Home</a></p>
<p><a href="#products">Shop with Us</a></p>
<p><a href="#trending">Hot Fabrics on Purchase</a></p>
<p><a href="#about">About Us</a></p>
<p><a href="#cart">Cart</a></p>
<p><a href="#availableproduct">Available Fabrics</a></p>
</>



const Navbar = () => {
 const {toggleMenu, setToggleMenu} = useState(false);

  return (
    <div className="fs__navbar">
      <div className="fs__navbar-links">
        <div className="fs__navbar-links_logo">
          { <img src= {logo} alt= "logo" /> }
        </div>
        <div className="fs__navbar-links_container">
        <Menu />
        </div>
      </div>
      <div className="fs__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
      </div>
      <div className="fs__navbar-cart">
      <button type= "button">{<img src= {cart} alt= "cart" /> } Cart</button>
      </div>
      <div className="fs__navbar-menu">
        {toggleMenu
         ? <RiCloseLine color= "#492d2d" size={27} onclick={() => setToggleMenu (false)}/>
         : <RiMenu3Line color= "#492d2d" size={27} onclick={() => setToggleMenu (true)}/>
      }
        {toggleMenu && (
          <div className="fs__navbar-menu_container flip-scale-2-hor-top">
            <div className="fs__navbar-menu_container-links">
            <Menu />
            <div className="fs__navbar-menu_container-links-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
      </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Navbar