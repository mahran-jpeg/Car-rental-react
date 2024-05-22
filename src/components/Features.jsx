import React from 'react';
import Feature1 from '../assets/feature-1.png'
import Feature2 from '../assets/feature-2.png'
import Feature3 from '../assets/feature-3.png'
import Feature from './ui/Feature';

const Features = () => {
  return (
    <div>
   <section id="feature">
    <div className="container">
      <div className="row features__row">
        <h3 className="features__subtitle">
          Plan your trip now
        </h3>
        <h2 className="features title">
          Quick and easy car rental
        </h2>
        <div className="features__list">
          <Feature 
          image={Feature1} 
          title='Select Car' 
          paragraph ="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"/>

          <Feature 
          image={Feature2} 
          title='Contact Operator' 
          paragraph ="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"/>
          
          <Feature 
          image={Feature3} 
          title='Lets drive' 
          paragraph ="Whether you're hitting the open road, we've got you covered with our wide range of cars"/>
         
        </div>
      </div>
    </div>
   </section>
    </div>
  );
}

export default Features;
