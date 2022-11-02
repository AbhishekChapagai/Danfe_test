import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import colors from '../../../colors';
import CustomButton from '../../Custom/CustomButton';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import EducationComponentHeading from './EducationComponentHeading';
import TextBox from './TextBox';

interface Props {
  config: any;
}

const EducationComponentTexts = ({ config }: Props) => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  return (
    <Box
      sx={{
        width: `${isMobileSize ? '80%' : isTabletSize ? '80%' : '50%'}`,
        // height: config.textBoxHeight,
        backgroundColor: '',
        marginTop: isTabletSize ? '30px' : '0px'
      }}
    >
      <EducationComponentHeading config={config} />
      <Stack
        direction="column"
        rowGap={isMobileSize || isTabletSize ? 2 : 2}
        sx={{
          height: '100%',
        }}
      >

        <Typography
          variant="h6"
          color={config.color}
          sx={{ fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '25px', textAlign: 'start', fontSize: '18px' }}
        >
          Professional Counselling
          <Typography
            variant="body2"
            color={config.color}
            sx={{ letterSpacing: '1px', backgroundColor: '', textAlign: 'start', fontSize: '16px', paddingTop: '5px' }}
          >
            With so many top-notch alternatives and lovely places to live, choosing a degree of study abroad might be difficult.
            Before applying, chat with us if you're unsure about where to begin or if you believe you already know where you're headed but would need professional guidance first.
            Our knowledgeable and experienced education counselors would be delighted to learn about your situation and work with you to create a thorough learning strategy to get you where you want to be. We can assist you ensure that you're looking at the relevant courses and provide suitable alternatives thanks to our vast institutional ties.
            Speak with our education counselor in person.
            Most of our counselors have at some point been an international student, so we have genuine understanding and first-hand experience to share with you
            Our in-house team of visa documentation experts will organize study visas for you.

          </Typography>
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

      </Stack>

      {/* <CustomButton
        bagcolor={colors.purple}
        color={colors.white}
        height={config.btnHeight}
        width={config.btnWidth}
        margin={0}
      >
        Read More
      </CustomButton> */}
    </Box>
  );
};

export default EducationComponentTexts;
