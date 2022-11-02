import React, { useState } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import { Link, useNavigate } from 'react-router-dom';
import colors from '../../../colors';

const DrawerComp = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate()

  const loginToken = localStorage.getItem('loginTokenDanfeConsultancy');

  const logout = () => {
    localStorage.removeItem('loginTokenDanfeConsultancy');
    localStorage.removeItem('userID');
    window.location.href = '/'
  }
  const changeOpenState = () => {
    setOpen(!open);
  };

  return (
    <>
      {
        loginToken ?
          <>
            <Drawer anchor="right" open={open} onClose={() => setOpen(s => !s)}>
              <Box sx={{ width: '400px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', backgroundColor: '' }}>
                  <Box onClick={() => setOpen(false)} sx={{ width: 'fit-content' }}>
                    <Typography sx={{ padding: '15px', fontSize: '28px', color: '#1b1b1b', cursor: 'pointer' }}><span className="material-symbols-outlined">close</span></Typography>
                  </Box>
                </Box>
                <List sx={{ width: '100%', height: '100%', backgroundColor: '' }}>
                  <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText sx={{ width: '100%' }}><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-home"></i>&nbsp; &nbsp; &nbsp; Home</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/service' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-tools"></i>&nbsp; &nbsp; &nbsp; Services</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/event' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-calendar-alt"></i>&nbsp; &nbsp; &nbsp; Events</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-copy"></i>&nbsp; &nbsp; &nbsp; About</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/university' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-university"></i>&nbsp; &nbsp; &nbsp; University</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-phone"></i>&nbsp; &nbsp; &nbsp; Contact</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/studentapplication' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fab fa-wpforms"></i>&nbsp; &nbsp; &nbsp; Student Application</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/whystudyuk' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-question"></i>&nbsp; &nbsp; &nbsp; Why Study UK  </Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/profile' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-user-circle"></i>&nbsp; &nbsp; &nbsp; Profile</Typography></ListItemText>
                  </ListItemButton></Link>
                  <ListItemButton>
                    <ListItemText onClick={logout}><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-sign-out-alt"></i>&nbsp; &nbsp; &nbsp; Logout</Typography></ListItemText>
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </>
          :
          <>
            <Drawer anchor="right" open={open} onClose={() => setOpen(s => !s)}>
              <Box sx={{ width: '400px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'start', backgroundColor: '' }}>
                  <Box onClick={() => setOpen(false)} sx={{ width: 'fit-content' }}>
                    <Typography sx={{ padding: '15px', fontSize: '28px', color: '#1b1b1b', cursor: 'pointer' }}><span className="material-symbols-outlined">close</span></Typography>
                  </Box>
                </Box>
                <List sx={{ width: '100%', height: '100%', backgroundColor: '' }}>
                  <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText sx={{ width: '100%' }}><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-home"></i>&nbsp; &nbsp; &nbsp; Home</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/service' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-tools"></i>&nbsp; &nbsp; &nbsp; Services</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/event' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-calendar-alt"></i>&nbsp; &nbsp; &nbsp; Events</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-copy"></i>&nbsp; &nbsp; &nbsp; About</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/university' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-university"></i>&nbsp; &nbsp; &nbsp; University</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-phone"></i>&nbsp; &nbsp; &nbsp; Contact</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/studentapplication' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fab fa-wpforms"></i>&nbsp; &nbsp; &nbsp; Student Application</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/whystudyuk' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-question"></i>&nbsp; &nbsp; &nbsp; Why Study UK  </Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-sign-in-alt"></i>&nbsp; &nbsp; &nbsp; Login</Typography></ListItemText>
                  </ListItemButton></Link>
                  <Link to='/signup' style={{ textDecoration: 'none', color: 'black' }}><ListItemButton>
                    <ListItemText><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', padding: '2px', color: '#757575' }}><i className="fas fa-user-circle"></i>&nbsp; &nbsp; &nbsp; Sign up</Typography></ListItemText>
                  </ListItemButton></Link>

                </List>
              </Box>
            </Drawer>
          </>
      }

      <HamburgerMenu changeOpenState={changeOpenState} />
    </>
  );
};

export default DrawerComp;
