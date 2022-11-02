import { Box, List, Typography } from '@mui/material';
import CustomListItem from './CustomListItem';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import useDeviceWidth from '../hooks/useDeviceWidth';

type config = {
  fontSize: string;
  marginRight: string;
};

interface Props {
  config: config;
}

const SydneyOfficeFooterComponent = ({ config }: Props) => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  return (
    <Box sx={{ width: '310px', height: '250px' }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '600',
          fontSize: isMobileSize ? '25px' : isTabletSize ? '1rem' : isDesktopSize ? '1rem' : '1rem',
          textAlign: 'start',
          padding: '1rem'
        }}
      >
        Sydney Office
      </Typography>
      <List>
        <CustomListItem
          icon={<LocationOnIcon sx={config} />}
          text={'Suite 7, Level 3, 245 Castlereagh Street,Sydney NSW, 2000'}
        />

        <CustomListItem
          icon={<PhoneIcon sx={config} />}
          text={'+61 02 83854286 / +61414903563'}
        />

        <CustomListItem
          icon={<EmailIcon sx={config} />}
          text={'sydney@danfeinternational.com'}
        />
      </List>
    </Box>
  );
};

export default SydneyOfficeFooterComponent;
