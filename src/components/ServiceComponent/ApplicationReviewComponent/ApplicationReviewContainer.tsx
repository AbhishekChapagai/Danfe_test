import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import TextImageBox from '../CommonServiceComponent/TextImageBox';
import { Box, Typography, Card, Stack } from '@mui/material';


import img from '../../../images/application.jpg';
import { Link } from 'react-router-dom';

const ApplicationReviewContainer = () => {
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
      <Box sx={{ backgroundColor: '', width: '100%', padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', display: 'flex', flexDirection: isMobileSize ? 'column-reverse' : isTabletSize ? 'column-reverse' : 'row', justifyContent: 'center', columnGap: '30px', alignItems: 'center' }}>
        <Stack sx={{ width: isMobileSize ? '80%' : isTabletSize ? '80%' : isDesktopSize ? '50%' : '50%', height: '100%', backgroundColor: '', marginTop: isTabletSize ? '20px' : '0px' }}>
          <Typography
            variant="h6"
            color={config.color}
            fontSize={config.headingFontSize}
            sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
          >
            Application Review

            <Typography sx={{ marginTop: '10px', fontSize: '14px', padding: '20px' }}>
              <ul>
                <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>Face to Face counseling:</span> Your job ambitions, lifestyle, and academic objectives will be discussed with our Education Counselors so that we can provide personalized guidance. We'll make some great suggestions, study locations, and give you advice on courses, career paths, available scholarships, and potential financial aid for international students if you tell us about your educational objectives, your interests and skill sets, as well as your preferred lifestyle location.</li>
                <li><span style={{ fontSize: '15px', fontWeight: 'bold' }}>University Selection::</span> We will thoroughly research the colleges and institutions that can provide you with courses that are in line with your career path and preferred city once we have determined your personal and professional goals. We'll make sure you satisfy the standards for admission and advise you on visa needs.</li>
              </ul>
            </Typography>
            <Link to="/studentapplication" style={{ textDecoration: 'none' }}><CustomButton
              bagcolor={colors.primary}
              color='white'
              width={config.btnWidth}
              margin={0}
            // fontSize={config.btnTextSize}
            >
              Apply
            </CustomButton></Link>
          </Typography>
        </Stack>
        {<Card sx={{ width: isMobileSize ? '80%' : isTabletSize ? '80%' : isDesktopSize ? '50%' : '50%', height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px', borderRadius: '2px' }}>
          <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
        </Card>}
        

      </Box>
    </>
  );
};

export default ApplicationReviewContainer;
