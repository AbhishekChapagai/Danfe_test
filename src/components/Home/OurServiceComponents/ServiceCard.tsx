import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';

interface Props {
  cardHeading: string;
  cardText: string;
  icon: any;
}

const ServiceCard = ({ cardHeading, cardText, icon }: Props) => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  return (
    <Card
      className="hover"
      sx={{
        width: isMobileSize ? '350px' : isTabletSize ? '350px' : '450px',
        height: isMobileSize ? '250px' : isTabletSize ? '350px' : '300px',
        borderRadius: '8px',
        margin: '0.5rem',
        padding: '2rem',
        boxShadow: `16px 16px 32px #d6d6d6,
             -16px -16px 32px #ffffff`,
        color: `${colors.secondary}`,
        position: 'relative',
        transition: 'all 100ms ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <Stack direction={'column'} gap={2}>
        <CardContent style={{ padding: 0 }}>{icon}</CardContent>

        <CardContent style={{ padding: 0, color: 'black' }}>
          <Typography variant={isMobileSize ? 'h5' : isTabletSize ? 'body1' : 'h5'} fontWeight={'bold'} sx={{ fontFamily: '"Inter", sans-serif' }}>
            {cardHeading}
          </Typography>
        </CardContent>

        <CardContent style={{ padding: 0, color: '#8C8C8C' }}>
          <Typography
            variant="body1"
            sx={{ fontSize: isTabletSize ? '0.9rem' : '1rem', height: '10rem' }}
          >
            {cardText}
          </Typography>
        </CardContent>

        <CardContent style={{ padding: 0 }}>
          <Link to="/service"><Typography
            variant="body1"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'gray',
              position: 'absolute',
              bottom: '15px',
              fontSize: '1rem',
              transition: 'all 100ms linear',
              '&:hover': {
                color: `${colors.primary}`,
              },
              cursor: 'pointer',
            }}

          >
            Learn More
            <ArrowForwardIcon
              style={{
                marginLeft: '0.5rem',
                fontSize: '1.1rem',
              }}
            />
          </Typography></Link>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
