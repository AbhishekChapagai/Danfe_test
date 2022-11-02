import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import colors from '../../../colors';
import flexContainer from '../../common/flexContainer';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import FormFields from './FormFields';

const FormContainer = () => {

  const { isMobileSize, isTabletSize, customTopDestination } = useDeviceWidth();

  return (
    <Box
      sx={{
        width: '100%',
        padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 8rem', display: 'flex',
        flexDirection: 'column', columnGap: '50px', backgroundColor: ''
      }}
    >
      <Typography
        variant="h5"
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
          textTransform: 'capitalize',
          padding: '20px'
        }}
      >
        Request A Call
      </Typography>

      <FormFields />
    </Box>
  );
};

export default FormContainer;
