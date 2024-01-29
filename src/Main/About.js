import React from 'react';
import '../Main/About.css';
import info from '../Assets/spectrum_img.jpg';
import profile from '../Assets/profile_photo.jpg';
import Deepak from '../Assets/Team/Deepak.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const TeamMember = ({ name, position, photoUrl, paragraph }) => (
  <div className='card'>
    <img src={photoUrl} alt={name}></img>
    <h2>{name}</h2>
    <p>{position}</p>
  </div>
);

const About = () => {
  const teamMembers = [
    {
      name: 'Mr. Deepak Chaudhari',
      position: 'Promoter Chairman & Managing Director',
      photoUrl: Deepak,
      
    },
    {
      name: 'Mrs. Bharti Chaudhari',
      position: 'Whole Time Director',
      photoUrl: profile,
      
    },
    {
      name: 'Mr. Devendra Rane',
      position: 'Another Position',
      photoUrl: profile,
      
    },
    {
      name: 'Mr. Sanjay Pawade',
      position: 'Another Position',
      photoUrl: profile,
    },
    {
      name: 'Mr. Narendra Wagh',
      position: 'Another Position',
      photoUrl: profile,
    },
    {
      name: 'Mr. Kishor Dhake',
      position: 'Another Position',
      photoUrl: profile,
    },
    {
      name: 'Mr. Saurabh Malpani',
      position: 'Another Position',
      photoUrl: profile,
    },
    // Add other team members with their respective information
  ];

  return (
    
    <div className='body'>

      <Navbar/>
      <div className='about-us_container'>
        <h1>About us</h1>
        <div className='main-container'>
          <div className='about-img'>
            <img src={info} alt=''></img>
          </div>
          <div className='about-txt'>
            <h2>SPECTRUM ELECTRICAL INDUSTRIES LIMITED</h2>
            <p>
              We are an ISO 9001:2015 and 45001:2018 certified company, engaged in the business of designing and manufacturing of electrical, automobile, and irrigation components as contract manufacturers and as component suppliers to leading industry players on Business-to-Business (B2B) model.
            </p>
          </div>
        </div>
      </div>

      <section className='team'>
        <h1>Our Team </h1>
        <h4>Currently our Company has 7 Directors, out of which 4 are Non-Executive Independent Directors.</h4>
        <div className='card-container'>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              photoUrl={member.photoUrl}
              paragraph={member.paragraph}
            />
          ))}
        </div>
      </section>

      <section className='about'>
  <div className='container'>
    <div>
      <h1>Our Moto</h1>
      <p>“Every Employee A Partner, Every Customer A Commitment”</p>
      <p>A business is nothing without defined values that inspire each one of us every day. Our core values help us live up to that motto every day so our employees, partners & customers always get the best from us.</p>
    </div>

    <div>
      <h1>Our Mission</h1>
      <p>Delivering excellence in electrical components and services, we are committed to innovation, precision, and sustainability. We aim to surpass customer expectations, foster a dynamic workplace, and make a positive impact on our communities. </p>
    </div>

    <div>
      <h1>Our Vision</h1>
      <p>To be a recognized leader in the electrical industry, known for innovation, quality, and sustainability. We envision a future where Spectrum Electrical Industries Limited sets the standard for excellence, continuously pushes the boundaries of technology, and plays a vital role in shaping a more efficient and interconnected world. </p>
    </div>
  </div>
  <div className='line'></div>
  <div className='container'>
    <div>
      <h1>Honesty, Integrity & Respect</h1>
      
      <p>Our integrity is important to us; we do not compromise on it. We trust and respect each other - even when we disagree. We are honest and truthful in our actions.</p>
    </div>

    <div>
      <h1>Positive Environment</h1>
      <p>We foster talent with opportunities to grow and learn. We believe in taking initiative, being challenged and giving 100%.</p>
    </div>

    <div>
      <h1>Customer Driven </h1>
      <p>We stay true to our commitments made to our Customers. It's equally important to retain customers as winning new ones.</p>
    </div>
  </div>
</section>

<Footer/>






    </div>
  );
};

export default About;
