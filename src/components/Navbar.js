import React, { Component } from 'react';
import '../components/Navbar.css';
import Logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownVisible: !prevState.dropdownVisible
    }));
  };

  render() {
    return (
      <div>
        <section id="NavBar">
        <img src={Logo} alt="" className='Logo'></img>
          <button className="menu-icon" onClick={this.toggleDropdown}>
            ☰
          </button>
         
          <ul id="NavBar-txt" className={this.state.dropdownVisible ? 'visible' : ''}>
            <li>
              <Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Home</Link> 
            </li>
            <li>
              <Link to="/about" className={window.location.pathname === "/about" ? "active" : ""}>About</Link> 
            </li>
            <li>
              <Link to="/product" className={window.location.pathname === "/product" ? "active" : ""}>Our Product</Link> 
            </li>
            <li>
              <Link to="/contact" className={window.location.pathname === "/contact" ? "active" : ""}>Contact us</Link> 
            </li>
          </ul>
        </section>
        {this.state.dropdownVisible && 
         <div id="overlay" onClick={this.toggleDropdown}></div>}
      </div>
    )
  }
}
