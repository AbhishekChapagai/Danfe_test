import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import TextImageBox from '../CommonServiceComponent/TextImageBox';
import { Box, Typography, Card, Stack } from '@mui/material';
import img from '../../../images/accomodation.jpg';
import { Link } from 'react-router-dom';

const StudentAccomodationContainer = () => {
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
    imageBoxHeight: isTabletSize ? '435px' : '730px',
    borderRadius: '10px',
    color: '#1b1b1b',
    textBoxWidth: isMobileSize ? '340px' : isTabletSize ? '315px' : '830px',
    textBoxHeight: isMobileSize ? '340px' : isTabletSize ? '315px' : '800px',
  };

  return (
    <>

      <Box sx={{ backgroundColor: '', width: '100%', padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '1rem 3.5rem' : '4rem 7rem', display: 'flex', flexDirection: isMobileSize ? 'column' : isTabletSize ? 'column' : 'row', justifyContent: 'center', columnGap: '30px', alignItems: 'center' }}>
        {<Box sx={{ width: isMobileSize ? '80% ' : isTabletSize ? '80% ' : '50%', height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px', borderRadius: '2px' }}>
          <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
        </Box>}
        <Stack sx={{
          width: `${isMobileSize ? '80%' : isTabletSize ? '80%' : '50%'}`, height: '100%', backgroundColor: '', marginTop: isTabletSize ? '30px' : '0px'
        }}>
          <Typography
            variant="h6"
            color={config.color}
            fontSize={config.headingFontSize}
            sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
          >
            Student Accomodation

            <Typography sx={{ marginTop: '10px', fontSize: '16px' }}>
              Oftentimes, relocating overseas is most difficult when trying to find a place to live. If you want to find a place that has a wonderful location, a reasonable budget, and nice flatmates, you need to start looking as soon as possible. However, with all the procedures involved in applying to universities and purchasing airline tickets, lodging can sometimes go to the bottom of your list of priorities.<br></br>
              Don't panic; there are still many possibilities available to you even if you begin looking for student housing at the last minute.<br></br>
              There are plenty of other students seeking both a home and flatmates, so it's OK if you're coming alone and want to live in a house.<br></br>
              SpareRoom is the perfect spot to start your search because it has everything you require. Simply specify what you are looking for, whether it is a home or a flat, a single room, a double room, flatmates, or anything else. I discovered my home and my roommates in this way.<br></br>
              Gumtree is another website that provides both housing rents and used goods (in case you need some furniture, for instance).<br></br>
              No matter where you choose to attend school in the UK, Gumtree is available there. Facebook Marketplace is another choice, which frequently makes contact with the landlord more easier and allows you to see

            </Typography>
            <Link to="/contact" style={{ textDecoration: 'none' }}><CustomButton
              bagcolor={colors.primary}
              color='white'
              width={config.btnWidth}
              margin={0}
            // fontSize={config.btnTextSize}
            >
              Contact Us
            </CustomButton></Link>
          </Typography>
        </Stack>
       
      </Box>
    </>
  );
};

export default StudentAccomodationContainer;
