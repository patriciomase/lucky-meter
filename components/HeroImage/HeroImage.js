import React, { Component } from 'react';
import {
  Image
} from 'react-native';

const HeroImage = ({ path = null }) => {
  return (
    <Image
      source={ path || require('./waitingheader.jpg')}
      style={{
        maxHeight: 140
      }}
    />
  );
}

export default HeroImage;
