import { Box, Stack } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import EducationComponentHeading from './EducationComponentHeading';
import EducationComponentImages from './EducationComponentImages';
import EducationComponentTexts from './EducationComponentTexts';
import colors from '../../../colors';
import EducationComponentPicture from './EducationComponentPicture';

const EducationContainer = () => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  const config = {
    headingFontSize: isMobileSize ? '25px' : isTabletSize ? '30px' : '40px',
    subHeading: isMobileSize ? '15px' : isTabletSize ? '20px' : '36px',
    text: isMobileSize ? '11px' : isTabletSize ? '16px' : '30px',
    btnHeight: isMobileSize ? '34px' : isTabletSize ? '43px' : '67px',
    btnWidth: isMobileSize ? '100px' : isTabletSize ? '125px' : '192px',
    imageWidth: isTabletSize ? '200px' : '336px',
    imageHeight: isTabletSize ? '200px' : '330px',
    imageBoxWidth: isTabletSize ? '405px' : '600px',
    imageBoxHeight: isMobileSize ? '250px' : isTabletSize ? '500px' : '930px',
    borderRadius: '2px',
    color: '#1b1b1b',
    textBoxWidth: isMobileSize ? '340px' : isTabletSize ? '315px' : '830px',
    textBoxHeight: isMobileSize ? '340px' : isTabletSize ? '315px' : '800px',
  };

  return (
    <Box sx={{ padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', backgroundColor: '' }}>


      <Stack
        direction={isMobileSize ? 'column' : isTabletSize ? 'column' : 'row'}
        sx={{
          backgroundColor: '',
          height: `${isMobileSize ? 'fit-content' : isTabletSize ? 'fit-content' : 'fit-content'}`,
        }}
        justifyContent="center"
        alignItems='center'
        columnGap={isTabletSize ? 3 : 8}
        rowGap={isMobileSize ? 4 : 0}
      >
        {/* {!isTabletSize && <EducationComponentImages config={config} />} */}

 
          <EducationComponentPicture config={config} />
        

        <EducationComponentTexts config={config} />
      </Stack>
    </Box>
  );
};

export default EducationContainer;
