import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesPage>
      <h1>Our Services</h1>
      <ServiceList>
        <ServiceItem>Web and App Design</ServiceItem>
        <ServiceItem>Logo Design</ServiceItem>
        <ServiceItem>Flyer and Social Media Design</ServiceItem>
      </ServiceList>
    </ServicesPage>
  );
};

const ServicesPage = styled.div\`
  padding: 2rem;
  text-align: center;
\`;

const ServiceList = styled.ul\`
  list-style: none;
  padding: 0;
\`;

const ServiceItem = styled.li\`
  margin: 1rem 0;
\`;

export default Services;
