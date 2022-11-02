import { Box, Button, Toolbar, Typography } from '@mui/material';
import CustomAppBar from './Custom/CustomAppBar';
import CompanyLogo from './Home/NavigationComponents/CompanyLogo';
import DrawerComp from './Home/NavigationComponents/DrawerComp';
import NavLinks from './Home/NavigationComponents/NavLinks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useDeviceWidth from './hooks/useDeviceWidth';
import colors from '../colors';
import Aos from 'aos';


const NavigationBar = () => {

  // If device width is tablet size or smaller then returns true
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
  // change navigation background on scroll to make it more visible
  const [navBackground, setNavBackground] = useState(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [v, setV] = useState<any>();
  const [searchValue, setSearchValue] = useState<any>([])

  // Search uni
  const search = (value: any) => {

    axios.post("http://localhost:4000/api/users/searchuni", {
      universityName: value
    }).then((res) => {

      setSearchValue(res.data)
      console.log("university name", res.data)
    })
  }

  useEffect(() => {
    search(v);
    Aos.init({ duration: 1500 });
  }, [v])

  const changeBackground = () => {
    if (window.scrollY >= 695) {
      setNavBackground(true);
    }
    else {
      setNavBackground(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        {/* <Box sx={{ width: '100%', height: 'fit-content', backgroundColor: '', padding: isMobileSize ? '0.3rem 1rem' : isTabletSize ? '0.5rem 3.8rem' : '0.5rem 6rem' }}>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button sx={{ border: '1px solid black', color: 'black' }}><i className="fas fa-search"></i></Button>
          <Typography></Typography>
        </Box>
      </Box> */}
        <CustomAppBar sx={{ width: '100%', padding: isMobileSize ? '0.3rem 1rem' : isTabletSize ? '0.5rem 3.8rem' : '0.5rem 4rem', position: 'sticky', borderBottom: navBackground ? 'none' : '1px solid #ebebeb', boxShadow: navBackground ? ' 0px 5px 50px 0px rgba(72,72,72,0.2)' : '0px', backgroundColor: '' }}>
          <Toolbar sx={{ backgroundColor: '' }}>
            <CompanyLogo />
            <Box onClick={() => setOpenSearch(true)} sx={{ transition: '5s ease-in-out', marginRight: '10px' }}>
              <Typography sx={{ fontSize: '20px', color: '#757575', width: '40px', height: '40px', textAlign: 'center', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><i className="fas fa-search"></i></Typography>
            </Box>
            <DrawerComp />
            {/* {isMobileSize ? <DrawerComp /> : isDesktopSize ? <DrawerComp />} */}
            {/* {isTabletSize ? <DrawerComp /> : <NavLinks />} */}
            {/* Search button */}

          </Toolbar>

        </CustomAppBar>
        {
          openSearch &&
          <Box sx={{ padding: isMobileSize ? '0.3rem 1rem' : isTabletSize ? '0.5rem 3.8rem' : '2rem 10rem', width: '100%', height: '100vh', backgroundColor: 'white', position: 'fixed', top: '0', bottom: '0', zIndex: '1100', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', rowGap: '20px', textAlign: 'left', }}>
            <Box data-aos="fade-up" sx={{ width: '80%' }}>
              <Box onClick={() => setOpenSearch(false)} sx={{ width: 'fit-content' }}>
                <Typography sx={{ width: 'fit-content', padding: '10px', fontFamily: '"Poppins", sans-serif', '&:hover': { color: colors.primary }, fontSize: '14px' }}><span style={{ fontSize: '13px' }}><i className="fas fa-long-arrow-alt-left"></i></span> Go Back</Typography>
              </Box>
            </Box>
            <input data-aos="fade-up" data-aos-delay="200" type="text" placeholder="Search University" value={v} onChange={(e: any) => { setV(e.target.value) }} style={{ width: '80%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', outline: 'none', borderRadius: '10px', border: '1px solid #d0d0d0', fontFamily: '"Poppins", sans-serif', fontSize: '16px', boxShadow: ' 0px 3px 10px 0px rgba(72,72,72,0.2)' }} />
            {v ? <Box sx={{ backgroundColor: '', width: '80%', maxHeight: '300px', borderRadius: '10px', boxShadow: ' 0px 3px 10px 0px rgba(72,72,72,0.2)', display: 'flex', flexDirection: 'column', rowGap: '10px', overflowY: 'scroll', overflowX: 'hidden' }}>
              {
                searchValue && searchValue.universities && searchValue.universities.map((value: any) => {
                  return (
                    <>
                      <Box className='searchResult' sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'gray' }}>{value.universityName}</Typography>
                        <Link to={'/university/' + value._id} style={{ textDecoration: 'none' }}><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '11px', color: 'black', letterSpacing: '0.5px', cursor: 'pointer', '&:hover': { color: colors.primary } }}>View Details <i className="fas fa-long-arrow-alt-right"></i></Typography></Link>
                      </Box>
                    </>
                  )
                })
              }
            </Box> : null
            }
          </Box >
        }
      </Box>
    </>
  );
};

export default NavigationBar;
