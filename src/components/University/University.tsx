import { Box, Button, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useDeviceWidth from '../hooks/useDeviceWidth';
import collegeLogo from '../../images/aus.jpg'
import NavigationBar from '../NavigationBar';
import colors from '../../colors';
import FooterContainer from '../footer/FooterContainer';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const University = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();
  const [universityDetail, setUniversityDetail] = useState<any>()
  const { id } = useParams();

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`http://localhost:4000/api/users/searchuni/${id}`).then(
      (res) => {
        setUniversityDetail(res.data)
        console.log("University Details", res.data)
      }
    )
  }, [])

  return (
    <>
      <NavigationBar />
      <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '2rem 10rem', marginTop: '20px' }}>
        <Box sx={{ backgroundColor: '', width: '100%', display: 'flex', columnGap: '30px', justifyContent: 'space-between', alignItems: 'start' }}>
          <Box sx={{ width: 'fit-content', display: 'flex', columnGap: '20px' }}>
            <Box sx={{
              width: '200px', height: '130px', boxShadow: `1px 1px 2px #d0d0d0,-1px -1px 2px #d0d0d0`
            }}>
              <img src={collegeLogo} alt="College Logo" style={{ width: '100%', height: '100%' }} />
            </Box>
            <Box>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '25px', fontWeight: 'bold', letterSpacing: '0.8px', wordSpacing: '2px' }}>{universityDetail && universityDetail.uni.universityName}</Typography>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px' }}><span style={{ fontSize: '13px' }}><i className="fas fa-map-marker-alt"></i></span> {universityDetail && universityDetail.uni.country}</Typography><br />
            </Box>
          </Box>
          <Box>
            <a href='https://www.facebook.com' target='_blank' style={{ textDecoration: 'none', color: 'green ' }}><Button sx={{ width: '100px', backgroundColor: colors.primary, color: 'white', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px', fontSize: '12px', "&:hover": { backgroundColor: colors.secondary } }}>Share</Button></a><a href={`http://localhost:4000/${universityDetail && universityDetail.uni.brochureDownloadLink}`} target='_blank' style={{ textDecoration: 'none', color: 'green ' }}><Button sx={{ backgroundColor: '', color: colors.primary, fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px', fontSize: '12px', "&:hover": { color: '#1b1b1b' } }}>Download Brochure</Button></a>
          </Box>
        </Box>
      </Box>

      {/* College Description */}
      <Box sx={{ backgroundColor: '', width: '100%', marginTop: '10px', padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '1rem 10rem' }}>
        <Box sx={{}}>
          <Typography sx={{ fontSize: '13px', fontFamily: '"Poppins", sans-serif', textAlign: 'justify' }}>
            {universityDetail && universityDetail.uni.universityInfo}
          </Typography>
        </Box>
      </Box>
      {/* Post graduate programme */}
      <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '1rem 10rem' }}>
        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '20px' }}>Graduate Programme Offered</Typography>
        <Box sx={{ width: '100%', marginTop: '20px', display: 'flex', flexWrap: 'wrap', columnGap: '28px', rowGap: '30px' }}>
          {universityDetail && universityDetail.uni.graduateDegreeOffered.length > 0 ? (
            <>
              {
                universityDetail && universityDetail.uni.graduateDegreeOffered.map((value: any, index: any) => {
                  return (
                    <Card key={index} sx={{ width: '380px', height: 'fit-content', border: '1px solid #d8d8d8' }}>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'black', fontWeight: 'bold', letterSpacing: '1px' }}>{value.degreeName}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Duration</span><br />{value.duration}</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Tution Fee</span><br />{value.tutitionFee}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '13px', color: 'gray' }}>Upcoming Intake : </span>{value.upcomingIntake}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Exams</span><br />{value.requiredExam}</Typography>
                      </Box>
                      <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                        <a href={`http://${value.knowMore}`} target=" blank" style={{ textDecoration: 'none' }}><Typography sx={{ width: '100%', fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: 'black', letterSpacing: '1px', textAlign: 'center', cursor: 'pointer' }}><i className="fas fa-external-link-alt"></i> College Website</Typography></a>
                      </Box>
                    </Card>
                  )
                })}
            </>
          ) :
            <>
              <Box sx={{ backgroundColor: '', width: '100%' }}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}>This university doesn't provide graduate programme</Typography>
              </Box>
            </>
          }

        </Box>
      </Box >

      {/* Undergraduate programme */}
      <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '1rem 10rem', marginTop: '50px', marginBottom: '50px' }}>
        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '20px' }}>Undergraduate Programme Offered</Typography>
        <Box sx={{ width: '100%', marginTop: '20px', display: 'flex', flexWrap: 'wrap', columnGap: '28px', rowGap: '30px' }}>
          {universityDetail && universityDetail.uni.undergraduateDegreeOffered.length > 0 ? (
            <>
              {
                universityDetail && universityDetail.uni.undergraduateDegreeOffered.map((value: any, index: any) => {
                  return (
                    <Card key={index} sx={{ width: '380px', height: 'fit-content', border: '1px solid #d8d8d8' }}>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'black', fontWeight: 'bold', letterSpacing: '1px' }}>{value.degreeName}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Duration</span><br />{value.duration}</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Tution Fee</span><br />{value.tutitionFee}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '13px', color: 'gray' }}>Upcoming Intake : </span>{value.upcomingIntake}</Typography>
                      </Box>
                      <Box sx={{ borderBottom: '1px solid #d5d5d5', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: colors.primary, letterSpacing: '1px' }}><span style={{ fontSize: '12px', color: 'gray' }}>Exams</span><br />{value.requiredExam}</Typography>
                      </Box>
                      <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                        <a href={`http://${value.knowMore}`} target=" blank" style={{ textDecoration: 'none' }}><Typography sx={{ width: '100%', fontFamily: '"Poppins", sans-serif', fontSize: '13px', color: 'black', letterSpacing: '1px', textAlign: 'center', cursor: 'pointer' }}><i className="fas fa-external-link-alt"></i> College Website</Typography></a>
                      </Box>
                    </Card>
                  )
                })}
            </>
          ) :
            <>
              <Box sx={{ backgroundColor: '', width: '100%' }}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '', fontSize: '14px', color: colors.primary, letterSpacing: '1px' }}>This university doesn't provide undergraduate programme</Typography>
              </Box>
            </>
          }

        </Box>
      </Box >

      {/* Footer */}
      <FooterContainer />
    </>
  )
}

export default University