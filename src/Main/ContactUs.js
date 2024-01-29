import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../Main/ContactUs.css';
import Navbar from '../components/Navbar';


export default class ContactUs extends Component {
  render() {
    return (
      <div className='contact'>
        <Navbar/>
        <section id="map" className="section-p1">
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150232.02471448592!2d75.49759396814964!3d20.943432120965316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90b0ff6209b49%3A0x81e485ce97ef4d5f!2sSpectrum%20Electrical%20Industries%20Ltd.!5e0!3m2!1sen!2sin!4v1706351106143!5m2!1sen!2sin"
            style={{ border: '0', width: '100%', height: '70vh' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </section>
        <section id="contact-details" className="section-p2">
          <h2>Visit one of our agencies or contact us today</h2>
          <h3>Head Office</h3>
          <p>Gat No. 139/1 and 139/2, Umala, Jalgaon, Maharashtra - 425003, India</p>
          <p><i className="fa fa-envelope"></i> Email:info@spectrum-india.com</p>
          <p><i className="fa fa-phone"></i> Phone: 022-62638200</p>
          <p><i className="fa fa-clock-o"></i> Monday to Saturday 9:00 to 16:00 PM</p>
        </section>
        <section id="cards" className="section-p3">
          <div className="card">
            <h3><i className="fa fa-user"></i> Contact Person (Investor Grievance Redressal)</h3>
            <p>Mr. Rahul Lavane (Company Secretary.)</p>
            <p>Email: info@spectrum-india.com</p>
          </div>
          <div className="card">
            <h3><i className="fa fa-building"></i> Registered Office Address</h3>
            <p>Gat No. 139/1 and 139/2, Umala, Jalgaon, Maharashtra - 425003, India.</p>
            <p>CIN: L28100MH2008PLC185764</p>
            <p>GST No.: 27AAUCS2152E1Z7</p>
          </div>
          <div className="card">
            <h3><i className="fa fa-building"></i> Corporate Office Address</h3>
            <p>Office No. 501, A&B, Omega Building, 5th Floor, Omega Tower, Hiranandani Garden, Powai 400076, Mumbai.</p>
          </div>
          <div className="card">
            <h3><i className="fa fa-user"></i> Registrar and Transfer Agent</h3>
            <p>Bigshare Services Private Limited</p>
            <p>CIN: U99999MH1994PTC076534</p>
            <p>Head Office: Office No. S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Andheri (East) Mumbai – 400093.</p>
            <p>Tel: 022-62638200</p>
            <p>Email: info@bigshareonline.com</p>
          </div>
        </section>
        <section id="contact-form" className="section-p4">
          <h2>Contact Form</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <section id="social-media" className="section-p5">
          <h2>Follow Us</h2>
          <div>
            <a href=" "><i className="fa fa-facebook"></i></a>
            <a href=" "><i className="fa fa-twitter"></i></a>
            <a href=" "><i className="fa fa-instagram"></i></a>
            <a href=" "><i className="fa fa-linkedin"></i></a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
