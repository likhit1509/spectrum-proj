import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../Main/Home.css';
import Footer from '../components/Footer';
import partnerLogos from '../Main/partnersLogos'; // Assuming you have an array of logo paths
import service1 from '../Assets/Services/Metallic_Stamping.png'
import service2 from '../Assets/Services/Molds_dies_&_Tooling.png'
import service3 from '../Assets/Services/Plastics_Molding.png'
import service4 from '../Assets/Services/Surface_coatings.png'
import ImageSlider from '../components/ImageSlider';
import imgslider1 from '../Assets/Slidder/image1.jpg'
import imgslider2 from '../Assets/Slidder/image2.jpg'
import imgslider3 from '../Assets/Slidder/image3.jpg'
import imgslider4 from '../Assets/Slidder/image4.jpg'

class Home extends Component {
  render() {
    const slides = [
      { imageUrl: imgslider1, text: 'We propel your business growth.' },
      { imageUrl: imgslider2, text: 'Established in 2008,Spectrum electrical industries is your trusted partner for expert electrical solutions. Our experienced team is committed to excellence, safety, and client satisfaction.' },
      { imageUrl: imgslider3, text: 'Safety First, Always At Spectrum, we prioritize safety, adhering to industry standards to ensure a secure environment for our team and clients.' },
      { imageUrl: imgslider4, text: 'Proudly certified and honored with awards, spectrum leads in electrical excellence for supply of products and services' },
    ];

    const homeProducts = [
    // Replace this array with your own content
      {
        title: 'Metallic stamping',
        description: 'Our Metallic stamping Division is having state of the art manufacturing facilities and is equipped with 65 stamping presses of which 20 are high speed stamping presses and balance 45 are mechanical power presses with capacities varying from 10 300MT This division manufactures machine precision, high volume, complex electro- mechanical components and subassemblies to the exacting quality requirements of the customer. Stamping division currently manufactures approx. 600 MT of components and 250 MT approx. in the product from. The division handles more than 1500 press tools in varying degrees of complexities from single cavity to multiple cavity from manual to automated sheet feed tools and online in process quality inspection checks.',
        // features: ['Feature 1', 'Feature 2', 'Feature 3'],
        image: service1,
      },
      {
        title: 'Molds, dies & Tooling',
        description: 'Over past two decades, Spectrum has gained invaluable hands on experience and expertise in developing and designing new molds, dies Press tools, Jigs and fixtures this has necessitated investments in latest technologies and processes. Tool room houses machines, like EDM, Char mills, Deckles and quality set up includes CMM, VMM, Photo Spectrometers metrological equipments which has enabled Spectrum to efficiently utilize its capex intensive molding, stamping machines, manufacture in-house complex molds and dies fixtures etc. This has assuredly differentiated and created edge over other service providers and helped built niche capabilities for Spectrum of one stop shop for all solutions for our customers/OEMs. Our turnaround time from concept to prototype to supply of components is above industry norms averaging 6 to 9 months depending upon complexity of the components and systems involved.',
        // features: ['Feature A', 'Feature B', 'Feature C'],
        image: service2,
      },
      {
        title: 'Plastics Molding',
        description: 'This is Spectrums flagship latest state of the art technology intensive Division deploying top end Molding machines with brands from Arburg to Engel known for engineering plastics processing in large volumes on 24x7 basis. While total number of machines are 80 and the machine capacities vary from 30 to 300MT.The division handles more than 250 molds in varying degrees of complexities from single cavity to multiple cavity and all are having automated operations and online in process quality inspection checks. Division is supported by sophisticated mold repair and maintenance cell with skilled manpower which ensures optimum tool uptime and helps maintain OEE. Division handles around 30 types of engineering Plastics and having state of the art process control and quality lab set up manned with trained and CEPET qualified manpower..',
        // features: ['Feature A', 'Feature B', 'Feature C'],
        image: service3,
      },
      {
        title: 'Surface coatings',
        description: 'Our surface coatings division is well equipped with latest state of the art equipments. Our plants are having manual to fully automatic microprocessor controlled coatings systems. Spectrum is known as a top brand being pioneer in surface coatings in the electrical switchgear and automotive segments and is EHS compliant. We undertake Zinc, Nickel, Tin, Copper, Silver and Gold electroplating of metal components to customers exacting quality requirements. Divisions current output is 150MT/day and covers zinc, Nickel, Cu, Tin, Silver Plating.',
        // features: ['Feature A', 'Feature B', 'Feature C'],
        image: service4,
      },
      // Add more products as needed
    ];

    return (
      <div >
        <Navbar />  
      <div>
      <ImageSlider slides={slides} />
      </div>
        {/* Our Products Section with different content */}
        <div className='our-product'>
            <h1>Our Services</h1>
            <h3>
Our company prioritizes customer satisfaction through quality products, transparent operations, and timely delivery, conducting regular audits and seeking feedback for continuous improvement....</h3>
            <div className='home-prod_container'>
              {homeProducts.map((product, index) => (
                <div key={index} className='product-item'>
                  <div className='product-info'>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div className='product-feature'>
                      
                      {/* <ul>
                        {product.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul> */}
                    </div>
                  </div>
                  <div className='product-image'>
                    <img src={product.image} alt={product.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* The rest of your content (TagLine, Partners, Footer) remains unchanged */}

        <div className="home-container">
          <div className="company-info">
            <h3 className='company-name'>SPECTRUM ELECTRICAL INDUSTRIES LIMITED</h3>
          </div>
          <div className="shape">
            <h1 className="shape-heading">
              <ul>We</ul>
              <ul>Propel</ul>
              <ul>Your </ul>
              <ul>Business</ul>
              <ul>Growth</ul>
            </h1>
          </div>  

        </div>



        
        <section className='our_partners'>
          <h2>Our Partners</h2>
          <div className='partners-container'>
            {partnerLogos.map((logo, index) => (
              <div className='brand-1' key={index}>
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
