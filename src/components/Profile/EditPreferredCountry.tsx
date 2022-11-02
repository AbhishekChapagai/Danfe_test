import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import NavigationBar from '../NavigationBar';

const EditPreferredCountry = () => {

  const [countryUni, setCountryUni] = useState<any>()
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
  const feedbackRef = useRef();
  const { id } = useParams();

  let config = {
    width: isDesktopSize ? '98%' : '98%',
  };
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }


  useEffect(() => {
    axios.get(`http://localhost:4000/api/users/countryuni/${id}`, {
      headers: headers,
    }).then(
      (res) => {
        console.log(res.data.countryuni)
        setCountryUni(res.data.countryuni)

      }
    )
  }, [])
  const updateCountryuni = (values: any) => {

    axios.patch(`http://localhost:4000/api/users/countryuni/${id}`, values, { headers: headers }).then((res) => {

      sessionStorage.setItem("showmsg", "1")
      window.location.href = '/profile'

    })

  }

  return (
    <>
      <NavigationBar />
      <Box ref={feedbackRef} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >
        <Formik
          enableReinitialize
          initialValues={countryUni}
          onSubmit={(values) => {
            updateCountryuni(values)
          }}
        >
          <Form>
            <Grid
              container
              maxWidth={400}
              rowGap={2}
              justifyContent='center'
              alignItems='center'
              sx={{
                width: '100%',
                borderRadius: '8px',
                rowGap: '15px',
                marginTop: '30px',
                padding: '2rem',
                position: 'relative'
              }}>

              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Country</Typography>
                <Field
                  style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='Country'
                  name="country"

                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>University</Typography>
                <Field
                  style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='University'
                  name="university"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Course</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='Course'
                  name="course"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Intake</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='Intake'
                  name="intake"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Budget</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='Budget'
                  name="budget"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Scholarship</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder='Yes/No'
                  name="scholarship"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>

                <Field
                  style={{ width: '99%', height: '50px', outline: 'none', color: 'white', fontSize: '16px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: 'none', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', backgroundColor: colors.primary, cursor: 'pointer' }}
                  type="submit"
                  value="Update"
                  autoComplete="off"
                  id="register"
                  name="Update"
                />
              </Grid>

            </Grid>
          </Form>
        </Formik>
      </Box>
    </>
  )
}

export default EditPreferredCountry