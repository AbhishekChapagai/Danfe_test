import { Box, Typography, Button } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../images/banner.jpg';
import imgOne from '../../images/library.jpg';
import colors from '../../colors';
import CustomButton from '../Custom/CustomButton';
import './Banner.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Aos from 'aos';


const Banner = () => {
  /// If device width is tablet size or smaller then returns true
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
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



  // Settings for slider
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <>
      <Box style={{ backgroundColor: '' }}>
        <Box id="banner" sx={{ width: '100%', backgroundColor: '' }}>
          <Slider {...settings}>
            <Box className="bannerOverlay" sx={{ width: '100%', height: '', backgroundColor: '', display: 'flex !important', justifyContent: isMobileSize ? 'center' : isTabletSize ? 'center' : 'start', alignItems: 'center !important', position: 'relative' }}>
              <Box sx={{ backgroundColor: '', width: '100%', height: '88.5vh', }}>
                <img src={img} alt="ad banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Box sx={{ backgroundColor: '', width: isMobileSize ? '100%' : isTabletSize ? '80%' : '60%', position: 'absolute', zIndex: '999', display: 'flex', justifyContent: 'start', alignItems: isMobileSize ? 'center' : isTabletSize ? 'center' : 'start', flexDirection: 'column', rowGap: '20px', padding: isMobileSize ? '2rem' : isTabletSize ? '2rem' : '6rem' }}>
                <Typography sx={{ color: 'white', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', fontSize: isMobileSize ? '1.5rem' : isTabletSize ? '2rem' : '3rem', textTransform: 'uppercase' }}>Study Abroad</Typography>
                <Box>
                  <Typography sx={{ color: 'white', fontFamily: '"Poppins", sans-serif', fontWeight: '', fontSize: '1.5rem', textTransform: 'capitalize' }}>Fly to your dream destination University</Typography>
                  <Typography sx={{ color: 'white', fontFamily: '"Inter", sans-serif', fontWeight: 'normal', fontSize: isMobileSize ? '0.8rem' : isTabletSize ? '0.8rem' : '1rem', textAlign: isMobileSize ? 'center' : isTabletSize ? 'center' : 'start' }}>Join us to provide countless opportunities for students who want to pursue their educational goal. Danfe UK Nepal simplifies and bridges the gap between aspiring students wishing to study abroad and world ranking institutions.</Typography>
                </Box>
                <Box sx={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <input onClick={() => setOpenSearch(true)} placeholder="Search University" type="text" style={{ width: '100%', padding: '20px', borderRadius: '10px', outline: 'none', fontFamily: '"Poppins", sans-serif', fontSize: '15px', border: 'none' }} />
                  <Box sx={{ position: 'absolute', right: '20px' }}>
                    <Typography sx={{ color: '#757575', fontSize: '20px' }}><i className="fas fa-search"></i></Typography>
                  </Box>
                </Box>
                <Link to="/studentapplication" style={{ textDecoration: 'none' }}><CustomButton
                  bagcolor={colors.primary}
                  color='white'
                  width={isMobileSize ? '72px' : '92px'}
                  margin="0"
                  fontSize={isMobileSize ? '0.6rem' : undefined}
                >
                  Apply Now
                </CustomButton></Link>
              </Box>
            </Box>
          </Slider>
        </Box>
        {
          openSearch &&
          <Box sx={{ padding: isMobileSize ? '0.3rem 1rem' : isTabletSize ? '0.5rem 3.8rem' : '2rem 10rem', width: '100%', height: '100vh', backgroundColor: 'white', position: 'fixed', top: '0', bottom: '0', zIndex: '1100', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', rowGap: '20px', textAlign: 'left', }}>
            <Box data-aos="fade-up" sx={{ width: '80%' }}>
              <Box onClick={() => setOpenSearch(false)} sx={{ width: 'fit-content' }}>
                <Typography sx={{ width: 'fit-content', padding: '10px', fontFamily: '"Poppins", sans-serif', '&:hover': { color: colors.primary }, fontSize: '14px' }}><span style={{ fontSize: '13px' }}><i className="fas fa-long-arrow-alt-left"></i></span> Go Back</Typography>
              </Box>
            </Box>
            <input data-aos="fade-up" data-aos-delay="200" type="text" placeholder="Search University" value={v} onChange={(e: any) => { setV(e.target.value) }} style={{ width: '80%', padding: '20px', outline: 'none', borderRadius: '10px', border: '1px solid #d0d0d0', fontFamily: '"Poppins", sans-serif', fontSize: '16px', boxShadow: ' 0px 3px 10px 0px rgba(72,72,72,0.2)' }} />
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
      </Box >

    </>
  );
};

export default Banner;
