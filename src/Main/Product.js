// Product.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductItem from '../components/ProductItem';
import img1 from '../Assets/Products/img1.jpg';
import img2 from '../Assets/Products/img2.png';
import img3 from '../Assets/Products/img3.jpg';
import img4 from '../Assets/Products/img4.jpg';
import img5 from '../Assets/Products/img5.jpg';
import '../Main/Product.css';

const products = [
  {
    title: 'Mini MCB Base & Cover',
    description: 'Engineered for efficiency and safety, our Mini MCB Base & Cover ensures reliable performance in electrical systems.',
    features: ['Compact design for space efficiency', 'Durable materials for longevity', 'Seamless integration of internal components', 'Rigorous testing for safety assurance'],
    image: img1,
  },
  {
    title: 'Distribution Board',
    description: 'Our Distribution Board is designed for safe and efficient distribution of electrical power.',
    features: ['Robust construction', 'Highly durable', 'Easy installation', 'Optimal performance'],
    image: img2,
  },
  {
    title: 'AC Box',
    description: 'Our AC Box is designed to provide superior protection and control for your air conditioning units.',
    features: ['High-quality materials', 'Excellent durability', 'User-friendly design', 'High performance'],
    image: img3,
  },
  {
    title: 'Modular Electric Board Panels',
    description: 'Our Modular Electric Board Panels offer a flexible and efficient solution for electrical installations.',
    features: ['Modular design', 'Easy installation and maintenance', 'Highly durable', 'Excellent performance'],
    image: img4,
  },
  {
    title: 'Lamp Angle Holders',
    description: 'Our Lamp Angle Holders are designed to securely hold your lamps in place, providing optimal lighting conditions.',
    features: ['Sturdy construction', 'Easy installation', 'Versatile design', 'Long-lasting performance'],
    image: img5,
  },
];

const Product = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div >
      <Navbar />
      <animated.div style={fadeIn} className='our-product'>
        <h1>Our Products</h1>
        <h3>We have some amazing products for you...</h3>
        <div className='prod_container'>
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </animated.div>
      <Footer />
    </div>
  );
};

export default Product;
