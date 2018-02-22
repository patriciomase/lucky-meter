import React, { Component } from 'react';
import {
  Image
} from 'react-native';

const HeroImage = () => {
  return (
    <Image
      source={ require('./waitingheader.jpg')}
      style={{
        maxHeight: 140
      }}
    />
  );
}

export default HeroImage;
