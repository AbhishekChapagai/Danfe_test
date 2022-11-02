import { Box, Typography } from '@mui/material';
import img from '../../images/world.jpg';
import useDeviceWidth from '../hooks/useDeviceWidth';
import TextImageBox from '../ServiceComponent/CommonServiceComponent/TextImageBox';

const OurObjectives = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  //   let config = {
  //     btnWidth: isMobileSize ? '125px' : isTabletSize ? '105px' : '172px',
  //     btnTextSize: isMobileSize ? '12px' : isTabletSize ? '15px' : '20px',
  //   };

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '30px', marginTop: '60px', marginBottom: '50px' }}>
        {/* {!isMobileSize && <Box sx={{ width: '50%', height: `${isTabletSize ? '40vh' : '50vh'}`, borderRadius: '2px', objectFit: 'cover' }}>
          <img src={img} style={{ height: '100%', width: '100%', borderRadius: '2px', objectFit: 'cover' }} />
        </Box>} */}
        <Box sx={{ width: `${isMobileSize ? '95%' : '80%'}`, padding: '20px' }}>
          {/* <Typography sx={{ fontSize: `${isMobileSize ? '25px' : '40px'}`, fontFamily: '"Inter", sans-serif', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Our Objective
          </Typography> */}
          <Typography sx={{ textAlign: 'justify', fontFamily: '"Poppins", sans-serif', fontSize: '16px' }}> We first ascertain your educational and professional objectives before offering you the appropriate advice. Why you should talk to us is as follows:
          </Typography>
          <Typography sx={{ fontSize: '13px', padding: '20px', fontFamily: '"Poppins", sans-serif' }}>
            <ul>
              <li>We've worked directly with hundreds of students and have first-hand knowledge of overseas education.</li>
              <li>From determining your goals to applying for a course and school of your choosing, our certified team of specialists will walk you through every step of the admissions process.
                We can reduce the cost of your education by locating the best scholarships, and many colleges will eliminate application fees if you apply via us.
              </li>
              <li>We represent 100+ of the world's best colleges and institutions from the UK,Australia,Canada & USA which offer programmes in a wide range of subjects.</li>
            </ul>
          </Typography>
          <Typography sx={{ fontSize: "16px", fontFamily: '"Poppins", sans-serif', textAlign: 'justify' }}>
            Guiding your every step in your study abroad Journey<br></br>
            We work with a wide range of partners who provide various options for international education. We have connections all over the world, and our staff of qualified counselors places hundreds of aspirant students like you in respectable institutions and universities throughout the world to assist them pick their career and educational route.
          </Typography>
        </Box>
      </Box>

    </>
  );
};

export default OurObjectives;
