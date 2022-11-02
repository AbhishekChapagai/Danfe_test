import { Box } from '@mui/material';
import Banner from './Banner';
import useDeviceWidth from '../hooks/useDeviceWidth';


const NavBanner = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();


  return (
    <>
      <Banner />
    </>
  );
};

export default NavBanner;
