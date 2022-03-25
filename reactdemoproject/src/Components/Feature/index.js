import React from 'react';
import { FeatureContainer,FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
        <FeatureContainer id='feature'>
            <h1>Today's Special Food</h1>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer> 

  );
};

export default Feature;
