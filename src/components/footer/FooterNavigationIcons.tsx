import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Stack } from '@mui/material';
import colors from '../../colors';
import { Link } from 'react-router-dom';

const FooterNavigationIcons = () => {
  let config = {
    color: colors.secondary,
    fontSize: '2rem',
    backgroundColor: '#F0F0F0',
    borderRadius: '30px',
    cursor: 'pointer',

    '&:hover': {
      transition: 'all 0.2s linear',
      transform: 'scale(1.3)',
    },
  };

  return (
    <Stack
      direction="row"
      columnGap={2}
      justifyContent={'center'}
      sx={{
        backgroundColor: '#F5F5F5',
        padding: '0.5rem',
      }}
    >
      <a href='https://www.facebook.com/profile.php?id=100076120852372' target="_blank"><FacebookIcon sx={{ ...config }} /></a>
      <a href='https://www.instagram.com/danfe__uk/' target="_blank"><InstagramIcon sx={{ ...config }} /></a>
    </Stack>
  );
};

export default FooterNavigationIcons;
