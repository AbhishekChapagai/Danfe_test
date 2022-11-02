import React from 'react';
import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';

const BannerButton = () => {
  return (
    <CustomButton
      bagcolor={colors.primary}
      color='#ffffff'
      padding="0.4rem 1rem"
      marginTop="3rem"
    >
      Apply Now
    </CustomButton>
  );
};

export default BannerButton;
