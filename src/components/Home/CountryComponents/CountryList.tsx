import React from 'react';
import { Stack } from '@mui/material';

import CountryCard from './CountryCard';

import UK from '../../../images/Study-in-UK.jpg';
import colors from '../../../colors';

const CountryList = () => {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-evenly'}
        sx={{
          backgroundColor: 'white',
          padding: '1rem',
        }}
      >
        <CountryCard countryName="UK" image={UK} />
        <CountryCard countryName="UK" image={UK} />
        <CountryCard countryName="UK" image={UK} />
      </Stack>
    </>
  );
};

export default CountryList;
