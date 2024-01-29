// ProductItem.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProductItem = ({ title, description, features, image }) => {
  const slideIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <animated.div style={slideIn} className='product-item'>
      <div className='product-info'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='product-feature'>
          <h2>Key Features:</h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='product-image'>
        <img src={image} alt={title} />
      </div>
    </animated.div>
  );
};

export default ProductItem;
  