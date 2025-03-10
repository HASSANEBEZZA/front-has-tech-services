import React from 'react';
import './services.scss'; 

interface ServiceCardProps {
  name: string;
  description: string;
  price: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, price }) => {
  return (
    <div className="service-card"> 
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{`$${price.toFixed(2)}`}</p>
    </div>
  );
};

export default ServiceCard;
