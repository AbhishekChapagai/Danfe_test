import { Card, CardContent, Typography, Box } from '@mui/material';
import colors from '../../../colors';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import flexContainer from '../../common/flexContainer';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  description: string;
  time: string;
  learnMore: string
}

const UpcomingEventCard = ({ title, description, time, learnMore }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  let config = {
    height: isMobileSize ? '325px' : isTabletSize ? '325px' : isDesktopSize ? '350px' : '370px',
    width: isMobileSize ? '300px' : isTabletSize ? '300px' : '385px',
    fontSize: isMobileSize ? '12px' : isTabletSize ? '12px' : '18px',
    fontSizeFooter: isMobileSize ? '12px' : isTabletSize ? '12px' : '14px',
  };
  const [event, setEvent] = useState<any>([])

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }


  return (
    <Link to={learnMore} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          width: config.width,
          height: config.height,
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          padding: '1rem',
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
      >
        <CardContent sx={{ marginBottom: '1rem' }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: isMobileSize ? '20px' : isTabletSize ? '20px' : '28px',
              fontWeight: '600',
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <CardContent sx={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="body1"
            sx={{ lineHeight: '28px', fontSize: config.fontSize }}
          >
            {description}
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            ...flexContainer,
            justifyContent: 'space-between',
            fontSize: config.fontSizeFooter,
          }}
        >

          <Typography sx={{ ...flexContainer, fontSize: config.fontSizeFooter }}>
            <AccessTimeIcon />&nbsp; {time}
          </Typography>
        </CardContent>

        <Box sx={{ width: '200px', height: '200px', border: '2px dotted black', borderRadius: '100%', position: 'absolute', top: '-40px', right: '-40px', zIndex: 0, opacity: '0.3' }} />
        <Box sx={{ width: '150px', height: '150px', border: '2px dotted black', borderRadius: '100%', position: 'absolute', top: '-20px', right: '-25px', zIndex: 0, opacity: '0.3' }} />
        <Box sx={{ width: '100px', height: '100px', border: `2px dotted ${colors.primary}`, borderRadius: '100%', position: 'absolute', bottom: '-40', right: '0', zIndex: 0, opacity: '0.5' }} />
      </Card>
    </Link>
  );
};

export default UpcomingEventCard;
