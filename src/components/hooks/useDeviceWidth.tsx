import { useMediaQuery } from '@mui/material';
import width from '../common/deviceWidth';

type ReturnType = {
  isMobileSize: boolean;
  isTabletSize: boolean;
  isDesktopSize: boolean;
  customTabletSize: boolean;
  customSizeForAboutUs: boolean;
  customSizeForAboutUs2: boolean;

  customTopDestination: boolean;
};

function useDeviceWidth(): ReturnType {
  // If device width is tablet size or smaller then returns true
  const isMobileSize = useMediaQuery(width.mobile);
  const isTabletSize = useMediaQuery(width.tablet);
  const isDesktopSize = useMediaQuery(width.desktop);
  const customTabletSize = useMediaQuery(width.customTablet);
  const customSizeForAboutUs = useMediaQuery(width.customSizeForAboutUs);
  const customSizeForAboutUs2 = useMediaQuery(width.customSizeForAboutUs2);
  const customTopDestination = useMediaQuery(width.customTopDestination);

  console.log('Mobile: ', isMobileSize);
  console.log('Tablet: ', isTabletSize);
  console.log('Desktop: ', isDesktopSize);

  return {
    isMobileSize,
    isTabletSize,
    isDesktopSize,
    customTabletSize,
    customSizeForAboutUs,
    customSizeForAboutUs2,
    customTopDestination,
  };
}

export default useDeviceWidth;
