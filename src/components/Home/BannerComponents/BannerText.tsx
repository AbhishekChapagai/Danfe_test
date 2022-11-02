import { Typography } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';

const BannerText = () => {
  // If device width is tablet size or smaller then returns true
  const { isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Typography
      variant="body2"
      sx={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: `${isDesktopSize ? '16px' : isTabletSize ? '15px' : '18px'}`,
        lineHeight: 1.5,
        textAlign: 'start',
        position: 'relative',
        zIndex: '100',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vulputate
      aliquam amet, sed commodo etiam vitae. Molestie leo natoque ultrices
      pulvinar id pellentesque in pulvinar. Adipiscing quam mattis aliquet cras
      viverra ultrices. Viverra cras quis aliquam, feugiat consectetur ultrices
      tristique sit aliquam.
    </Typography>
  );
};

export default BannerText;
