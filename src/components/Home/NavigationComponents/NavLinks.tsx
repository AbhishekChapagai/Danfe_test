import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';


import CustomButton from '../../Custom/CustomButton';

const btnStyles = {
  bagcolor: '#ffffff',
  border: `2px solid ${colors.primary}`,
  // padding: '0.2rem 1.5rem',
  width: '80px !important',
  height: '32px !important',
  fontSize: '13px',
  fontFamily: '"Inter", sans-serif !important',
  color: `${colors.primary}`,
};


const navlinkStyles = {
  textDecoration: 'none',
  color: 'black',
};

const NavLinks = () => {

  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
  const navigate = useNavigate()

  const loginToken = localStorage.getItem('loginTokenDanfeConsultancy');
  console.log(loginToken);

  const logout = () => {
    localStorage.removeItem('loginTokenDanfeConsultancy');
    localStorage.removeItem('userID');
    window.location.href = '/'
  }

  return (
    <>

      {/* Before login */}
      {loginToken ?
        <>
          <Box flex={isMobileSize ? 5 : isTabletSize ? 5 : isDesktopSize ? 10 : 9} sx={{ display: 'flex', justifyContent: 'end', columnGap: '28px', backgroundColor: '', }}>
            <Link to="/" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Home</Typography>
            </Link>


            <Link to="/service" style={navlinkStyles}><Typography className='dropdown navlink' variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Services &nbsp;<i className="fas fa-angle-down"></i>
              <Box className='dropdown_menu' sx={{ position: 'absolute', top: '20px', left: '-40px' }}>
                <Box sx={{ backgroundColor: 'white', width: '150px', borderRadius: '5px' }}>
                  <Box sx={{ marginTop: '20px', backgroundColor: '', padding: '0.5rem 0.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/event" style={navlinkStyles}><Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Events</Typography></Link>
                  </Box>
                  <Box className="countryDropdown navlink" sx={{ marginTop: '', backgroundColor: '', padding: ' 0.5rem 0.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #d0d0d0' }}>
                    <Link to="#" style={navlinkStyles}><Typography className=" " variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', position: 'relative', color: 'black' }}>Country&nbsp;<span style={{ fontSize: '10px' }}><i className="fas fa-chevron-right"></i></span>
                      <Box className='countryDropdown_menu' sx={{ padding: '0rem 2rem', backgroundColor: '', position: 'absolute', top: '-7.5px', right: '-230px' }}>
                        <Box sx={{ width: '150px', backgroundColor: 'white', padding: '0.5rem 0.3rem', borderRadius: '5px' }}>
                          <Box>
                            <Box sx={{ backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <Link to="/whystudyuk" style={navlinkStyles}><Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>United Kingdom</Typography></Link>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Typography></Link>
                  </Box>
                </Box>
              </Box>
            </Typography></Link>


            <Link to="/about" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>About</Typography>
            </Link>
            <Link to="/university" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>University</Typography>
            </Link>
            <Link to="/contact" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Contact</Typography>
            </Link>
            <Link to="/studentapplication" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Student Application</Typography>
            </Link>
          </Box >
          <Box flex={isMobileSize ? 5 : isTabletSize ? 5 : isDesktopSize ? 3 : 2} sx={{ height: '50px', backgroundColor: '', display: 'flex', justifyContent: 'end', columnGap: '5px', alignItems: 'center' }}>
            <Box onClick={logout}><CustomButton {...btnStyles} >Logout</CustomButton></Box>
            <Link to='/profile' style={{ textDecoration: 'none' }}><Box style={{ border: '1px solid gray', width: '32px', height: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }}><p style={{ fontSize: '20px', color: 'gray' }}><i className="fas fa-user"></i></p></Box></Link>
          </Box>
        </>
        :
        <>
          <Box flex={isMobileSize ? 5 : isTabletSize ? 5 : isDesktopSize ? 10 : 9} sx={{ display: 'flex', justifyContent: 'end', columnGap: '28px', backgroundColor: '', }}>
            <Link to="/" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Home</Typography>
            </Link>


            <Link to="/service" style={navlinkStyles}><Typography className='dropdown navlink' variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Services &nbsp;<i className="fas fa-angle-down"></i>
              <Box className='dropdown_menu' sx={{ position: 'absolute', top: '20px', left: '0px' }}>
                <Box sx={{ marginTop: '20px', backgroundColor: 'white', padding: '1rem', borderRadius: '5px', border: '.5px solid #dbdbdb ' }}>
                  <Link to="/event" style={navlinkStyles}><Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Events</Typography></Link>
                </Box>
              </Box>
            </Typography></Link>


            <Link to="/about" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>About</Typography>
            </Link>
            <Link to="/university" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>University</Typography>
            </Link>
            <Link to="/contact" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Contact</Typography>
            </Link>
            <Link to="/studentapplication" style={navlinkStyles}>
              <Typography className="navlink" variant="body2" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>Student Application</Typography>
            </Link>
          </Box >
          <Box flex={isMobileSize ? 5 : isTabletSize ? 5 : isDesktopSize ? 3 : 2} sx={{ height: '50px', backgroundColor: '', display: 'flex', justifyContent: 'end', columnGap: '5px', alignContent: 'center' }}>
            <Link to='/login' style={{ textDecoration: 'none' }}><CustomButton {...btnStyles}>Login</CustomButton></Link>
            <Link to='/signup' style={{ textDecoration: 'none' }}><CustomButton {...btnStyles}>Sign Up</CustomButton></Link>
          </Box>
        </>
      }

    </>
  );
};

export default NavLinks;
