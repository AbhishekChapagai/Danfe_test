import { Box, Stack } from '@mui/material';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import ServiceImage from './ServiceImage';

import ServiceInfo from './ServiceInfo';

export interface Config {
  textFontSize?: string;
  headingFontSize?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  color?: string;
  serviceBoxWidth?: string;
  imageWidth?: string;
  imageHeight?: string;
}

const OurServiceContainer = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  let config: Config = {
    textFontSize: isMobileSize ? '16px' : isTabletSize ? '18px' : '18px',
    headingFontSize: isMobileSize ? '25px' : isTabletSize ? '30px' : '40px',
    buttonWidth: isMobileSize ? '115px' : isTabletSize ? '134px' : '192px',
    buttonHeight: isMobileSize ? '34px' : isTabletSize ? '50px' : '67px',
    color: '#1b1b1b',
    serviceBoxWidth: isMobileSize ? '80%' : isTabletSize ? '80%' : '50%',
    imageWidth: isTabletSize ? '261px' : '551px',
    imageHeight: isTabletSize ? '303px' : '642px',
  };

  return (
    <Box sx={{ padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', backgroundColor: '' }}>
      <Stack
        direction={isMobileSize ? 'column-reverse' : 'row'}
        alignItems={'start'}
        justifyContent="center"
        columnGap={isTabletSize ? 3 : 8}
        rowGap={isMobileSize ? 4 : 0}
        sx={{ backgroundColor: '', width: '100%', display: 'flex', flexDirection: isMobileSize ? 'column-reverse' : isTabletSize ? 'column-reverse' : 'row', justifyContent: 'center', alignItems: 'center' }}
      >
        <ServiceInfo config={config} />
        <ServiceImage config={config} />
      </Stack>
    </Box>
  );
};

export default OurServiceContainer;
