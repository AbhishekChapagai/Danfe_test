import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import TextImageBox from '../CommonServiceComponent/TextImageBox';
import { Box, Typography, Card, Stack } from '@mui/material';
import graduation from '../../../images/airport.jpg';
import library from '../../../images/plane.jpg';
import education from '../../../images/passport.jpg';
import visa from '../../../images/visa.png';
import EducationComponentImages from '../EducationComponent/EducationComponentImages';
import { Link } from 'react-router-dom';

const StudentProfilingContainer = () => {
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
      <Box sx={{ backgroundColor: '', width: '100%', padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', display: 'flex', justifyContent: 'center', flexDirection: isMobileSize ? 'column-reverse' : isTabletSize ? 'column-reverse' : 'row', alignItems: 'center', columnGap: '50px' }}>

        <Stack sx={{ width: isMobileSize ? '80%' : isTabletSize ? '80%' : '50%', height: '100%', backgroundColor: '', marginTop: isTabletSize ? '20px' : '0px' }}>
          <Typography
            variant="h6"
            color={config.color}
            fontSize={config.headingFontSize}
            sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
          >
            Student VISA Guidance

            <Typography sx={{ marginTop: '10px', fontSize: '16px' }}>
              Our team manages hundreds of visa cases annually with an incredibly high success rate of visa approvals since we have a deep understanding of the most recent international visa legislation of the United Kingdom. Therefore, regardless of your position or background, we will collaborate with you to maximize your chances of success.<br></br>
              In addition to choosing your courses and applying for a visa, it's crucial that you take care of other matters like health insurance, financial assistance, any English language requirements, and health coverage. Everything will be discussed at your initial session.<br></br>
              Laws governing border protection are constantly changing and vary based on your nationality. We'll thus utilize our wealth of knowledge to advise you so that you maintain a strong position for visa compliance.
            </Typography>
            <Link to="/contact" style={{ textDecoration: 'none' }}><CustomButton
              bagcolor={colors.primary}
              color='white'
              width={config.btnWidth}
              margin={0}
            // fontSize={config.btnTextSize}
            >
              Contact
            </CustomButton></Link>
          </Typography>
        </Stack>
        {

          <Box sx={{ backgroundColor: '', width: isMobileSize ? '80%' : isTabletSize ? '80%' : '50%', height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px' }}>
            <img src={visa} style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out',
            }} />
          </Box>
        }

      </Box>

      {/* <TextImageBox
        button={
          <CustomButton
            bagcolor={colors.purple}
            color={colors.white}
            width={config.btnWidth}
            margin={0}
            fontSize={config.btnTextSize}
          >
            Read More
          </CustomButton>
        }
        isImage={false}
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales pretium, tincidunt eget sodales velit. Elit ultrices pellentesque mauris amet nulla justo. Ultricies malesuada nec, lacus varius turpis orci dignissim. Aenean sed pretium, mauris vel amet.'
        }
        heading="Student Profiling"
        image={<EducationComponentImages config={config2} />}
        imageDirection="left"
      /> */}
    </>
  );
};

export default StudentProfilingContainer;
