import { Card, Typography } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import '../../../index.css'

interface Props {
  text: string;
  image: any;
}

const TopDestinationCard = ({ text, image }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Card
      sx={{
        width: isMobileSize ? '300px' : isTabletSize
          ? '250px'
          : '300px',
        height: isTabletSize
          ? '280px'
          : isDesktopSize
            ? '260px'
            : '300px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}
      className="topDestinationCard"
    >
      <img src={image} alt="" style={{ height: '100%', width: '100%', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out', objectFit: 'cover' }} />

      <Typography
        variant={isDesktopSize ? 'body1' : 'h6'}
        sx={{
          width: '70%',
          position: 'absolute',
          bottom: isDesktopSize ? '20px' : '40px',
          padding: isDesktopSize ? '0.1rem 0.5rem' : '0.4rem 1.5rem',
          borderRadius: '0.3rem',
          color: '#fff',
          textAlign: 'center',
          cursor: 'pointer',
          zIndex: '1',
          fontWeight: 'bold',
          letterSpacing: '1.5px',
          border: '1px solid gray',
          textTransform: 'uppercase',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2 )',
          }
        }}
      >
        {text}
      </Typography>
    </Card>
  );
};

export default TopDestinationCard;
