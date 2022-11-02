import { Box, Stack, Typography } from '@mui/material';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import flexContainer from '../common/flexContainer';

const ContactInfo = () => {
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  const config = {
    headingFontSize: isTabletSize ? '20px' : '25px',
    headingText: isTabletSize ? '15px' : '13px',
    subHeading: isTabletSize ? '11px' : '13px',
    text: isTabletSize ? '18px' : '22px',

    iconSize: '30px',

    boxWidth: '600px',

    officeHeading: isTabletSize ? '30px' : '18px',
  };

  return (
    <Box sx={{ width: `${isMobileSize ? '95%' : isTabletSize ? '95%' : '50%'}`, display: 'flex', backgroundColor: '', padding: '1.5rem' }}>
      <Stack direction="column" rowGap={1}>
        <Typography
          variant="h4"
          sx={{
            fontSize: config.headingFontSize, fontWeight: 'bold', fontFamily: '"Inter", sans-serif', color: '#1b1b1'
          }}
        >
          Contact <span style={{ color: colors.primary }}>Information</span>
        </Typography>

        <Typography sx={{ fontSize: config.headingText, fontFamily: '"Inter", sans-serif', color: 'darkgray' }}>
          We take care of everything as your partner in foreign education, from helping you choose the proper courses and apply, to assisting you in getting the necessary visa. The most significant and crucial decision you will ever make in your life will be assisted by our professionals.
          Strong working ties have been established with our university partners, and we now provide scholarships to worthy students to assist cover the costs of studying abroad.

        </Typography>

        <Box sx={{ backgroundColor: '' }}>
          <Stack direction={'column'} rowGap={2}>
            <Typography variant="h4" sx={{ fontSize: config.headingFontSize, backgroundColor: '', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', paddingTop: '10px', display: 'flex', justifyContent: 'start', alignItems: 'center', color: '#1b1b1b' }}>
              Kathmandu
            </Typography>

            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-location-dot"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>
                  3rd Floor Miracle Complex,Opposite to Global IME Bank, New Baneshwor, Kathmandu 44600 Nepal</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-phone"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>
                  +977-1-4793703 / +977 9851175942/ +977 9802375942</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-envelope"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>Info@danfeuk.com/councilling@danfeuk.com</span>
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ backgroundColor: '', fontSize: config.headingFontSize, fontFamily: '"Inter", sans-serif', fontWeight: 'bold', paddingTop: '10px', display: 'flex', justifyContent: 'start', alignItems: 'center', color: '#1b1b1b' }}>
              Chitwan
            </Typography>

            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-location-dot"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>
                  East West HighwayLions Chowk (In Front of Shubha Petrol Pump), Narayangarh,Chitwan, Nepal</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-phone"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>
                  +977 56570824 / +977-9862546787</span>
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ backgroundColor: '', fontSize: config.headingFontSize, fontFamily: '"Inter", sans-serif', fontWeight: 'bold', paddingTop: '10px', display: 'flex', justifyContent: 'start', alignItems: 'center', color: '#1b1b1b' }}>
              Sydney
            </Typography>

            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-location-dot"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>Suite 7, Level 3, 245 Castlereagh Street,
                  Sydney NSW, 2000
                </span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-phone"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>
                  +61 02 83854286 / +61414903563</span>
              </Typography>
            </Box>
            
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: config.subHeading,
                  color: colors.primary,
                  fontFamily: '"Inter", sans-serif'
                }}
              >
                <i className="fa-solid fa-envelope"></i> <span style={{ fontWeight: 'bold' }}></span> : <span style={{ color: 'darkgray' }}>sydney@danfeinternational.com</span>
              </Typography>
            </Box>

          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactInfo;
