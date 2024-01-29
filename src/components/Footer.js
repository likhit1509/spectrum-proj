import React, { Component } from 'react'
import '../components/Footer.css';
import Logo from '../Assets/Logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className='Footer'> 
            <div className='main'> 
            <div className='logo_sec'>
              <img src={Logo} alt='' id='logo'></img>
              <h1>SPECTRUM</h1>

              <div className='upper-info'>
              <i class="fa-solid fa-phone"></i>
              <h2>02572210192</h2>
              <i class="fa-solid fa-envelope" ></i>
              <h2 className='upper-info-email'>info@spectrum-india.com</h2>
              </div>
              </div>

              <div className='footer-line'></div>
              <div className='bellow-info'>
                <div>
                <i class="fa-solid fa-user"></i>
                <h2>Contact Person</h2>
                <p>
                    <ul>(Investor Grievance Redressal)</ul>
                    <ul>Mr. Rahul Lavane</ul>
                    <ul> (Company Secretary.)</ul>
                    <ul>Email: info@spectrum-india.com</ul>
                    
                    </p>
                </div>

                <div>
                <i class="fa-solid fa-location-dot"></i>
                <h2>Registered Office Address</h2>
                <p>
                  
                  
                    <ul>Gat No. 139/1 and 139/2</ul>
                    <ul>Jalgaon, Maharashtra - 425003, India.</ul>
                    <ul>CIN: L28100MH2008PLC185764</ul>
                    <ul>GST No.: 27AAUCS2152E1Z7</ul>
                  
                  </p>
                </div>


                <div>
                <i class="fa-solid fa-location-dot"></i>
                <h2>Corporate Office Address</h2>
                <p>Office No. 501, A&B, Omega Building, 5th Floor, Omega Tower, Hiranandani Garden, Powai 400076,Mumbai
                </p>
                </div>
              </div>
              <div className='footer-links'>
              <i class="fa-brands fa-threads"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
        </section>
      </div>
    )
  }
}
