import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';

interface Props {
  imageDirection: 'left' | 'right';
  image: any;
  heading: string;
  description: string | any;
  button: any;
  list?: string;
  isImage?: boolean;
}

const TextImageBox = ({
  imageDirection,
  image,
  heading,
  description,
  button,
  list,
  isImage,
}: Props) => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  let config = {
    headingFontSize: isMobileSize ? '20px' : isTabletSize ? '28px' : '40px',
    textFontSize: isMobileSize ? '12px' : isTabletSize ? '15px' : '26px',
    textLineHeight: isMobileSize ? '21px' : isTabletSize ? '37px' : '37px',

    textBoxWidth: isMobileSize ? '320px' : isTabletSize ? '358px' : '780px',

    imageWidth: isTabletSize ? '258px' : '350px',
    imageHeight: isTabletSize ? '319px' : '400px',
  };

  const buttonContainer = isMobileSize ? (
    <Box textAlign="right">{button}</Box>
  ) : (
    button
  );

  const text = (
    <Stack
      direction="column"
      rowGap={2}
      sx={{ width: config.textBoxWidth, backgroundColor: 'yellow' }}
      alignItems="start"
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: config.headingFontSize,
          color: '#1b1b1b',
          fontWeight: '600',
          fontFamily: '"Inter", sans-serif'
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: config.textFontSize,
          color: '#1b1b1b',
          lineHeight: config.textLineHeight,
        }}
      >
        {description}
      </Typography>
      {list && list}
      {buttonContainer}
    </Stack>
  );

  const image2 = !isMobileSize ? (
    <Box>
      <img
        src={image}
        style={{
          height: config.imageHeight,
          width: config.imageWidth,
          borderRadius: '8px',
        }}
        alt="ImageOk"
      />
    </Box>
  ) : null;

  return (
    <Stack
      direction={'row'}
      sx={{
        padding: isMobileSize ? '1rem' : '2rem',
        paddingTop: isMobileSize ? '1rem' : '3rem',
      }}
      justifyContent={'center'}
      alignItems={'center'}
      columnGap={8}
    >
      {imageDirection === 'left' ? (
        <>
          {isImage ? image2 : image}
          {text}
        </>
      ) : (
        <>
          {text}
          {isImage ? image2 : image}
        </>
      )}
    </Stack>
  );
};

export default TextImageBox;
