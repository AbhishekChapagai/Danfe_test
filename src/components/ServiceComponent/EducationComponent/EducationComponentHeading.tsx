import { Typography } from '@mui/material';
import React from 'react';
import colors from '../../../colors';

interface Props {
  config: any;
}

const EducationComponentHeading = ({ config }: Props) => {
  return (
    <Typography
      variant="h6"
      color={config.color}
      fontSize={config.headingFontSize}
      sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
    >
      Study Abroad
    </Typography>
  );
};

export default EducationComponentHeading;
