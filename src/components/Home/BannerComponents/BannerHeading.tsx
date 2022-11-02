import { Typography } from '@mui/material';
import colors from '../../../colors';
import flexContainer from '../../common/flexContainer';
import useDeviceWidth from '../../hooks/useDeviceWidth';

const BannerHeading = () => {
  // If device width is tablet size or smaller then returns true
  const { isTabletSize } = useDeviceWidth();

  return (
    <Typography
      variant="h2"
      sx={{
        textTransform: 'capitalize',
        width: '100%',
        ...flexContainer,
        flexDirection: 'column',
        alignItems: 'start',
        fontWeight: 'bold',
        paddingBottom: '1.3rem',
        fontSize: `${isTabletSize ? '28px' : '48px'}`,
      }}
    >
      study at your desired
      <span style={{ color: colors.primary }}>
        {' '}
        destination <span style={{ color: 'black' }}>with us</span>
      </span>
    </Typography>
  );
};

export default BannerHeading;
