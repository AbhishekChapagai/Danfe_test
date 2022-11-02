import React from 'react';
import colors from '../../colors';

interface Props {
  isTablet: boolean;
}

const CustomCircle = ({ isTablet }: Props) => {
  {
    // For tablet or smaller sized screen
    return (
      <div
        style={{
          width: '90%',
          height: '550px',
          borderRadius: '90%',
          position: 'absolute',
          bottom: '-350px',
          right: '0',
          backgroundColor: '#FECE8F',
          opacity: '0.5',
          zIndex: '-1',
          overflow: 'hidden',
        }}

      >
      </div>
    );
  }

  // For Desktop
  return (
    <div
      style={{
        width: '640px',
        height: '640px',
        borderRadius: '50%',
        position: 'absolute',
        bottom: '-180px',
        right: '0px',
        backgroundColor: '#efefef',
        opacity: '0.9',
        zIndex: '-100',
      }}
    ></div>
  );
};

export default CustomCircle;
