import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import TextImageBox from '../CommonServiceComponent/TextImageBox';
import { Box, Typography, Card, Stack } from '@mui/material';
import img from '../../../images/documentation.jpg';
import { Link } from 'react-router-dom';


const DocumentationContainer = () => {
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

      <Box sx={{ backgroundColor: '', width: '100%', padding: isMobileSize ? '2rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', display: 'flex', flexDirection: isMobileSize ? 'column' : isTabletSize ? 'column' : 'row', justifyContent: 'center', columnGap: '30px', alignItems: 'center' }}>
        {<Card sx={{ width: isMobileSize ? '80%' : isTabletSize ? '80%' : '50%', height: isMobileSize ? '250px' : isTabletSize ? '250px' : isDesktopSize ? '50vh' : '430px', borderRadius: '2px' }}>
          <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '2px' }} />
        </Card>}
        <Stack sx={{ width: `${isMobileSize ? '80%' : isTabletSize ? '80%' : '50%'}`, height: '100%', backgroundColor: '', marginTop: isTabletSize ? '20px' : '0px' }}>
          <Typography
            variant="h6"
            color={config.color}
            fontSize={config.headingFontSize}
            sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', paddingBottom: '20px', backgroundColor: '', textAlign: 'start' }}
          >
            Documentation
            <Typography sx={{ marginTop: '10px', fontSize: '16px' }}>
              For many people, the visa application process and results might be quite intimidating. All you want is a group you can rely on to provide you with objective guidance.

              We at Danfe UK have years of expertise managing all different classes and types of visas. Your whole visa application procedure will be supported and guided by our visa specialists.

            </Typography>
            <Typography sx={{ fontSize: '14px', padding: '20px' }}>
              <ul>
                <li>
                  We're dedicated to offering you moral counseling and all-encompassing help.
                </li>
                <li>
                  Every sort of visa, including student visas, partner visas, and skilled independent visas, can be assisted by our team of visa paperwork specialists.
                </li>
                <li>
                  We'll walk you through the full application procedure from beginning to end once we've resolved your predicament. Before submitting your application, we'll give it a thorough review, and we'll check in with the relevant parties later to make sure everything is still on track.</li>
                <li>
                  In order to provide you with personalized assistance, our visa documentation specialists will ask you about your professional objectives and personal desires.</li>

              </ul>
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
        
      </Box>

    </>
  );
};

export default DocumentationContainer;
