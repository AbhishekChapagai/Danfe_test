import { AppBar, styled } from '@mui/material';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  color: '#000000',
  position: 'static',
  textDecoration: 'none'
}));

export default CustomAppBar;
