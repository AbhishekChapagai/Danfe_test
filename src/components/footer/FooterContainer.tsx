import { Box, Typography } from '@mui/material';
import danfe from '../../images/logo.jpg'

// Icons

import flexContainer from '../common/flexContainer';
import useDeviceWidth from '../hooks/useDeviceWidth';
import ChitwanOfficeFooterComponent from './ChitwanOfficeFooterComponent';
import FooterExtras from './FooterExtras';
import FooterNavigationIcons from './FooterNavigationIcons';
import KTMOfficeFooterComponent from './KTMOfficeFooterComponent';
import ShortcutLink from './ShortcutLink';
import ShortCutMenuComponent from './ShortCutMenuComponent';
import SydneyOfficeFooterComponent from './SydneyOfficeFooterComponent';



const FooterContainer = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  let config = {
    fontSize: '1.3rem',
    marginRight: '.5rem',
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: isMobileSize ? 'column' : isTabletSize ? 'column' : 'row',
          alignItems: 'start',
          backgroundColor: '#F5F5F5',
          padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 2rem',
        }}
      >
        <Box sx={{ backgroundColor: '', width: 'fit-content', display: 'flex', justifyContent: `${isMobileSize ? 'space-between' : isTabletSize ? 'start' : 'center'}`, alignItems: 'start', padding: '1rem' }}>
          {/* LOGO */}
          <img src={danfe} alt='logo of danfe' style={{ opacity: '0.2', width: '50px', height: '50px' }} />
        </Box>

        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'start', backgroundColor: '', columnGap: '50px', padding: '1rem' }}>

          <Box sx={{ textAlign: 'end', backgroundColor: '', width: 'fit-content' }}>
            <Box sx={{ display: 'flex', justifyContent: isMobileSize ? 'start' : isTabletSize ? 'start' : 'center' }}>
              <KTMOfficeFooterComponent config={config} />
            </Box>
          </Box>

          <Box sx={{ textAlign: 'end', backgroundColor: '', width: 'fit-content' }}>
            <Box sx={{ display: 'flex', justifyContent: isMobileSize ? 'start' : isTabletSize ? 'start' : 'center' }}>
              <ChitwanOfficeFooterComponent config={config} />
            </Box>
          </Box>

          <Box sx={{ textAlign: 'end', backgroundColor: '', width: 'fit-content' }}>
            <Box sx={{ display: 'flex', justifyContent: isMobileSize ? 'start' : isTabletSize ? 'start' : 'center' }}>
              <SydneyOfficeFooterComponent config={config} />
            </Box>
          </Box>
          <Box sx={{ textAlign: 'end', backgroundColor: '', width: '100px' }}>
            <Box sx={{ display: 'flex', justifyContent: isMobileSize ? 'start' : isTabletSize ? 'start' : 'center' }}>
              <ShortcutLink config={config} />
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterNavigationIcons />
      <FooterExtras config={config} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D9D9D9',
          padding: '1rem',
        }}
      >
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>&copy; Copyright Danfe Consultancy, 2022</Typography>
      </Box>

    </>
  );
};

export default FooterContainer;
