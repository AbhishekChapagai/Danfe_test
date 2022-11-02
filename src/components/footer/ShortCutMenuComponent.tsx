import { Box, Typography, List } from '@mui/material';
import CustomListItem from './CustomListItem';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import useDeviceWidth from '../hooks/useDeviceWidth';

type config = {
  fontSize: string;
  marginRight: string;
};

interface Props {
  config: config;
}

const ShortCutMenuComponent = ({ config }: Props) => {
  const { isMobileSize } = useDeviceWidth();

  return (
    <Box sx={{ width: '270px', height: '250px' }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: '600',
          fontSize: isMobileSize ? '20px' : '30px',
          textAlign: 'center',
        }}
      >
        Shortcut Menu
      </Typography>
      <List>
        <CustomListItem icon={<HomeIcon sx={config} />} text={'Home'} />

        <CustomListItem
          icon={<SupportAgentIcon sx={config} />}
          text={'Service'}
        />

        <CustomListItem
          icon={<AccountBalanceIcon sx={config} />}
          text={'University and Country'}
        />

        <CustomListItem icon={<PhoneIcon sx={config} />} text={'Contact Us'} />
      </List>
    </Box>
  );
};

export default ShortCutMenuComponent;
