import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  InputLabel,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Stack,
  Table,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Paper from '@mui/material/Paper';
import FooterContainer from '../footer/FooterContainer';
import axios from 'axios';
import NavigationBar from '../NavigationBar';



const UniversityContainer = () => {

  const { isMobileSize, isTabletSize } = useDeviceWidth();
  // const [country, setCountry] = useState('');
  const [sort, setSort] = useState('');
  const [country, setCountry] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [universityLocation, setUniversityLocation] = useState("");
  const [universityInfo, setUniversityInfo] = useState("");
  const [universityWebUrl, setUniversityWebUrl] = useState("");
  const [brochureDownloadLink, setBrochureDownloadLink] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [duration, setDuration] = useState("");

  const [university, setUniversity] = useState<any>([])
  const [gradDeg, setGradDeg] = useState<boolean>(false);
  const [underGradDeg, setUnderGrad] = useState<boolean>(false);
  const [graduate, setGraduate] = useState<any>([])
  const [underGraduate, setUnderGraduate] = useState<any>([])

  console.log("Grad Degree ", gradDeg)
  console.log("Under ", underGradDeg)
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchUni = async () => {
      await axios.get(`http://localhost:4000/api/users/university?graddeg=${gradDeg}&undergraddeg=${underGradDeg}`, {
        headers: headers,
      }).then((res) => {
        setUniversity(res.data);
        console.log(res.data)

      })
    }
    // const fetchGraduate = async () => {
    //   await axios.get("http://localhost:4000/api/admin/university", {
    //     headers: headers,
    //   }).then((res) => {
    //     setUniversity(res.data);

    //   })
    // }
    // const fetchUnderGraduate = async () => {
    //   await axios.get("http://localhost:4000/api/admin/university", {
    //     headers: headers,
    //   }).then((res) => {
    //     setUniversity(res.data);
    //   })
    // }

    fetchUni();
  }, [gradDeg, underGradDeg])

  // console.log(university && university.universities && university.universities[0] && university.universities[0].underGraduateDegree[0] && university.universities[0].underGraduateDegree[0].degree)
  // For slider
  const settings = {
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  }

  return (
    <>
      <NavigationBar />
      <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', }}>
        <Box sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>

          {/* 1st section */}
          <Stack direction={isMobileSize ? 'column' : 'row'} columnGap={4} rowGap={2} alignItems="center" sx={{ backgroundColor: '' }}>
            <Typography variant="h6" sx={{ color: '#1b1b1b', fontSize: '15px', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', letterSpacing: '.5px', textTransform: 'capitalize' }}>
              Top University And College In <span style={{ color: colors.primary }}>United Kingdom</span>
            </Typography>

          </Stack>

          {/* 2nd section */}
          <Stack direction={isMobileSize ? 'column' : 'row'} marginTop={2} >
            <Box sx={{
              display: 'flex', justifyContent: 'start', alignItems: `${isMobileSize ? 'start' : 'center'}`, width: '100%', columnGap: '30px', backgroundColor: '', flexDirection: `${isMobileSize ? 'column' : 'row'}`
            }}>
              <Typography sx={{ width: `${isMobileSize ? '100%' : '10%'}`, color: colors.primary, fontWeight: 'bold', fontFamily: '"Poppins", sans-serif', letterSpacing: '.5px', fontSize: '14px', textTransform: 'uppercase', marginTop: '5px' }}>Education :</Typography>
              <Stack marginTop={isMobileSize ? 2 : 0} sx={{ backgroundColor: '', width: '80%', display: 'flex' }}>
                <FormGroup sx={{ display: 'flex', flexDirection: `${isMobileSize ? 'column' : 'row'}` }}>
                  <FormControlLabel onChange={() => setUnderGrad(s => !s)} control={<Checkbox />} label="Under Graduate" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '12px' }} />
                  <FormControlLabel onChange={() => setGradDeg(s => !s)} control={<Checkbox />} label="Post Graduate" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '12px' }} />
                </FormGroup>
                <FormGroup sx={{ display: 'flex', flexDirection: `${isMobileSize ? 'column' : 'row'}` }}>

                </FormGroup>
              </Stack>
            </Box>
          </Stack>


          {/* 3rd section */}
          <Box sx={{ backgroundColor: '', padding: '20px', marginTop: '50px', border: '1px solid #ededed', borderRadius: '10px' }}>
            <Slider {...settings}>
              <Box sx={{ backgroundColor: '#262626', color: 'white', width: '250px !important', padding: '10px', borderRadius: '10px', display: 'flex !important', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #ebedeb' }}>
                <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px' }}>MSc in UK</Typography>
                {/* <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px', marginTop: '8px' }}>(100 Students)</Typography> */}
              </Box>
              <Box sx={{ backgroundColor: '#262626', color: 'white', width: '250px !important', padding: '10px', borderRadius: '10px', display: 'flex !important', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #ebedeb' }}>
                <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px' }}>MBA in UK</Typography>
                {/* <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px', marginTop: '8px' }}>(100 Students)</Typography> */}
              </Box>
              <Box sx={{ backgroundColor: '#262626', color: 'white', width: '250px !important', padding: '10px', borderRadius: '10px', display: 'flex !important', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #ebedeb' }}>
                <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px' }}>BIM in UK</Typography>
                {/* <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px', marginTop: '8px' }}>(100 Students)</Typography> */}
              </Box>
              <Box sx={{ backgroundColor: '#262626', color: 'white', width: '250px !important', padding: '10px', borderRadius: '10px', display: 'flex !important', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid #ebedeb' }}>
                <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px' }}>BSc in UK</Typography>
                {/* <Typography sx={{ width: 'auto', fontFamily: '"Poppins", sans-serif', fontSize: '14px', marginTop: '8px' }}>(100 Students)</Typography> */}
              </Box>
            </Slider>
          </Box>


          {/* 4th section */}
          <Box sx={{ backgroundColor: '', marginTop: '50px' }}>
            <TableContainer component={Paper} sx={{ backgroundColor: '', padding: '2rem', height: '70vh' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '' }}>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>University Name</TableCell>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>Location</TableCell>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>College Info</TableCell>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>Graduate Degree</TableCell>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>Undergraduate Degree</TableCell>
                    <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', letterSpacing: '0.8px', fontSize: '12px' }}>Extras</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ padding: '2rem' }}>
                  {university && university.universities && university.universities.map((value: any, index: any) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', width: 'fit-content' }}>
                        {value.country}
                      </TableCell>
                      <TableCell align="center" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', width: 'fit-content' }}>{value.universityName}</TableCell>
                      <TableCell align="center" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', width: 'fit-content' }}>{value.universityLocation}&nbsp;<a href={'https://' + value.universityWebUrl} target='_blank' style={{ textDecoration: 'none', color: 'green ' }}>Student Website <i className="fas fa-external-link-alt"></i></a></TableCell>
                      {/* Graduate College */}
                      <TableCell align="center" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', width: 'fit-content' }}>

                        <Typography>
                          <select style={{ width: '100%', padding: '5px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', outline: 'none', border: '1px solid #d0d0d0', fontSize: '11px' }}>
                            {
                              value.graduateDegreeOffered.map((grad: any) => <option>{grad.degreeName} / {grad.duration}</option>)
                            }
                          </select>
                        </Typography>
                      </TableCell>
                      {/* Undergraduate College */}
                      <TableCell align="center" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', width: 'fit-content' }}>
                        <select style={{ width: '100%', padding: '5px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', outline: 'none', border: '1px solid #d0d0d0', fontSize: '11px' }}>
                          {
                            value.undergraduateDegreeOffered.map((under: any) => <option>{under.degreeName} / {under.duration}</option>)
                          }
                        </select>
                      </TableCell>
                      <TableCell align="center" sx={{ backgroundColor: '', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.8px', fontSize: '13px', display: 'flex', columnGap: '5px', width: 'fit-content' }}>
                        <a href='https://www.facebook.com' target='_blank' style={{ textDecoration: 'none', color: 'green ' }}><Button sx={{ backgroundColor: colors.primary, color: 'white', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px', fontSize: '12px', "&:hover": { backgroundColor: colors.secondary } }}>Share</Button></a><a href={`http://localhost:4000/${university.universities[index].brochureDownloadLink}`} target='_blank' style={{ textDecoration: 'none', color: 'green ' }}><Button sx={{ backgroundColor: '', color: colors.primary, fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px', fontSize: '12px', "&:hover": { color: '#1b1b1b' } }}>Brochure</Button></a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box >
      </Box >
      <FooterContainer />
    </>
  );
};

export default UniversityContainer;
