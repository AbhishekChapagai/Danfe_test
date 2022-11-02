import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import TopDestinationCard from './TopDestinationCard';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import uk from '../../../images/uk.jpg';
import usa from '../../../images/usa.jpg';
import canada from '../../../images/canada.jpg';
import aus from '../../../images/aus.jpg';
import colors from '../../../colors';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../../index.css';
import { display } from '@mui/system';


const destinations = [
  {
    id: 1,
    text: 'Study In UK',
    image: uk,
  },
  {
    id: 2,
    text: 'Study In USA',
    image: usa,
  },
  {
    id: 3,
    text: 'Study In Australia',
    image: aus,
  },
  {
    id: 4,
    text: 'Study In Canada',
    image: canada,
  },
 
];

const TopDestinationContainer = () => {

  const { isMobileSize, isTabletSize, customTopDestination } = useDeviceWidth();


  // Settings for slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  }

  return (
    <Box sx={{
      padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '2rem 7rem',
      width: '100%',
      overflow: 'hidden',
      marginTop: '50px'
      // backgroundColor: 'red'
      // height: 'auto'
    }}>

      <Typography
        variant="body2"
        marginBottom={'2rem'}
        sx={{
          width: '100%',
          color: '#252525',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: '2px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: '"Poppins", sans-serif',
          textTransform: 'Capitalize',

        }}
        className="typographyHeading"
        data-aos="zoom-in"
      >
        Top Destination
      </Typography>

      <Box sx={{ backgroundColor: '', width: '100%' }} id="card">

        <Slider {...settings}>
          {destinations && destinations.map(des => (
            <TopDestinationCard key={des.id} text={des.text} image={des.image} />
          ))}
        </Slider>

      </Box>

    </Box>
  );
};

export default TopDestinationContainer;
