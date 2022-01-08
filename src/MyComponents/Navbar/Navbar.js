import React,{useState} from "react";
import "./Navbar.css";

import login from './assests/login.jpg';
import search from './assests/search.png';
import cart from './assests/cart.png';
import wishlist from './assests/wishlist.jpg';
import logo from './assests/logo.png'
import ResList from "./ResList";


const Navbar = () => {
  const [opener,setopener]=useState(false);
  const [text,settext]=useState(false);
  const listopener = () => {
    setopener(
      {x: true}
    )
  }
  const onsearch = () => {
   settext(true)
  }
  const openerHandler = () => {
   setopener(null);
  }
  const searchhandler = () => {
    settext(null)
  }
  
  
  
  return (
    <div className="parent">
      {opener && <ResList onConfirm={openerHandler} />}
      <nav>
        <div className="navtop">
          <div className="containerA">
            <div className="services">
              <ul className="ulA">
                <li>Feedback</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="containerB">
            <div className="toggle">
              <img
                className="option"
                onClick={listopener}
                src="https://cdn-icons-png.flaticon.com/512/59/59660.png"
                alt=""
              />
            </div>
            <div className="ressearch">
              {text && (
                <input
                  type="search"
                  placeholder="Search products"
                  id="search"
               />
              )}
              
            </div>
            { text? null:true && <div className="logo">
              <img className="logo" src={logo} alt="" />
            </div>}
          </div>

          <div className="containerC">
            <div className="useruses">
              <ul className="ulB">
                <li>
                  <img
                    onClick={onsearch}
                    src={search}
                    className="searchres"
                    alt=""
                  />
                </li>
                <li>
                  <img className="login" src={login} alt="Logo" />
                  <p className="tag">Login</p>
                </li>
                <li>
                  {" "}
                  <img className="cart" src={cart} alt="cart" />
                  <p className="tag">Cart</p>
                </li>
                <li>
                  <img className="wishlist" src={wishlist} alt="wishlist" />
                  <p className="tag">Wishlist</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navcat">
          <div className="containerD">
            <div className="hidden">
              <ul className="ulA">
                <li>Feedback</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="cat">
              <ul className="ulC">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Baby</li>
                <li>Sale</li>
              </ul>
            </div>
            <div className="searchbar">
              <label htmlFor="text">
                <img src={search} className="search" alt="" />
              </label>
              <input type="search" placeholder="Search products" id="search" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
