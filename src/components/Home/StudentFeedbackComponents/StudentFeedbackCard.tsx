import { Card, CardContent, Typography } from '@mui/material';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import '../../../index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props {
  name: string;
  review: string;
}

const StudentFeedbackCard = ({ name, review }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
  let config = {
    height: isMobileSize ? '280px' : isTabletSize ? '275px' : '280px',
    width: isMobileSize ? '323px' : isTabletSize ? '300px' : isDesktopSize ? '380px' : '595px',
  };


  return (
    <Card
      sx={{
        // border: '2px solid #6999F3',
        width: config.width,
        height: config.height,
        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        padding: '1.3rem',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'left',
          borderRadius: '50px',
          overflow: 'hidden',
          marginBottom: '1.2rem'
        }}
      >

        <Typography
          variant="body2"
          sx={{
            fontSize: isMobileSize ? '25px' : isTabletSize ? '19px' : isDesktopSize ? '28px' : '30px',
            color: '#575757',
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {name}
        </Typography>
      </CardContent>

      <CardContent sx={{
        position: 'relative !important', padding: '2px'
      }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobileSize ? '10px' : isTabletSize ? '12px' : '16px',
            padding: '5px', position: 'relative', zIndex: '2'
          }}
        >
          {review}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '70px',
            position: 'absolute', color: `${colors.primary}`, left: 0, top: '-35px', opacity: '0.3', zIndex: '-0',
          }}
        >
          <i className="fa-solid fa-quote-left"></i>
        </Typography>
      </CardContent>

    </Card>
  );
};

export default StudentFeedbackCard;
