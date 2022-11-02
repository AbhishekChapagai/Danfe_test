import React from 'react';
import ladyHoldingBook from '../../../images/ladyHoldingBook.png';
import '../../../index.css'

const BannerGirl = () => {
  return (
    <img
      style={{
        position: 'absolute',
        bottom: 0,
        right: '50px',
      }}
      height={'155%'}
      src={ladyHoldingBook}
      alt="Girl holding bag"
      data-aos="fade-left"
    />
  );
};

export default BannerGirl;
