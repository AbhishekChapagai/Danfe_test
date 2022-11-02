import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import ServiceCard from './ServiceCard';
import colors from '../../../colors';
import '../../../index.css';


const iconStyle = {
  fontSize: '3rem',
  margin: 0,
};

const ourServiceCardDetails = [
  {
    id: 1,
    heading: 'Study Abroad',
    text: 'We will be in every step with you through choosing right courses and college',
    icon: <i style={iconStyle} className="fa-solid fa-book-open-reader"></i>,
  },
  {
    id: 2,
    heading: 'Migration',
    text: 'We will be in every step with you through your migration process',
    icon: <i style={iconStyle} className="fa-solid fa-map-location-dot"></i>,
  },
  {
    id: 3,
    heading: 'Career Couniling',
    text: 'We will help you with arrangin the best Overseas Student Health Cover insurance',
    icon: <i style={iconStyle} className="fa-solid fa-user"></i>,
  },
];

const ServiceList = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  return (
    <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '1rem 7rem', backgroundColor: '', marginBottom: '3rem' }}>
      <Typography
        variant="body2"
        fontWeight={'bold'}
        textAlign={'center'}
        marginBottom={9}
        color='#252525'
        sx={{
          width: '100%',
          color: '#252525',
          textAlign: 'center',
          fontWeight: '900',
          letterSpacing: '2px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: '"Poppins", sans-serif',
          textTransform: 'capitalize'
        }}
        className="typographyHeading"
        data-aos="zoom-in"
      >
        Our Services
      </Typography>

      <Stack
        direction={isMobileSize ? 'column' : isTabletSize ? 'row' : 'row'}
        justifyContent="space-between"
        alignItems={'center'}
        alignContent={'center'}
        rowGap={4}
      >
        {ourServiceCardDetails.map(item => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            cardHeading={item.heading}
            cardText={item.text}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ServiceList;
