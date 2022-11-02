import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

interface HamburgerMenuProps {
  changeOpenState: () => void;
}

const HamburgerMenu = ({ changeOpenState }: HamburgerMenuProps) => {
  return (
    <IconButton>
      <MenuIcon sx={{ fontSize: '2.4rem' }} onClick={() => changeOpenState()} />
    </IconButton>
  );
};

export default HamburgerMenu;
