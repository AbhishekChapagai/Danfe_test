import { Box } from '@mui/material';
import world from '../../../images/services.jpg';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import { Config } from './OurServiceContainer';

interface Props {
  config: Config;
}

const ServiceImage = ({ config }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box sx={{
      backgroundColor: '',
      width: isMobileSize ? '80%' : isTabletSize ? '80%' : isDesktopSize ? '50%' : '50%',
      objectFit: 'contain'
    }}>
      <img
        src={world}
        className="serviceImage"
        alt="Globe"
        style={{
          height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px',
          width: '100%',
          borderRadius: '2px',
          // position: 'relative',
          objectFit: 'contain'
        }}
      />
    </Box>
  );
};

export default ServiceImage;
