import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, List, Typography } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';
import CustomListItem from './CustomListItem';

type config = {
  fontSize: string;
  marginRight: string;
};

interface Props {
  config: config;
}

const KTMOfficeFooterComponent = ({ config }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box sx={{ width: '320px', height: '250px', backgroundColor: '' }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '600',
          fontSize: isMobileSize ? '25px' : isTabletSize ? '1rem' : isDesktopSize ? '1rem' : '1rem',
          textAlign: 'start',
          padding: '1rem'
        }}
      >
        Kathmandu
      </Typography>
      <List sx={{ backgroundColor: '', alignItems: 'flex-start' }}>
        <CustomListItem

          icon={<LocationOnIcon sx={{ ...config }} />}
          text={'3rd Floor Miracle Complex,Opposite to Global IME Bank, New Baneshwor, Kathmandu 44600 Nepal'}
        />

        <CustomListItem
          icon={<PhoneIcon sx={config} />}
          text={'+977-1-4793703 / +977 9851175942/ +977 9802375942'}
        />

        <CustomListItem
          icon={<EmailIcon sx={config} />}
          text={'Info@danfeuk.com/councilling@danfeuk.com'}
        />
      </List>
    </Box>
  );
};

export default KTMOfficeFooterComponent;
