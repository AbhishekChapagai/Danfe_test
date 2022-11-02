import { Typography, Box } from '@mui/material';
import React from 'react';
import danfe from '../../../images/logo.jpg'

const CompanyLogo = () => {
  return (
    <Box flex={1} sx={{ backgroundColor: '', }}>
      <img src={danfe} alt='danfe logo' style={{ width: '50px', height: '50px' }} />
    </Box>
  );
};

export default CompanyLogo;
