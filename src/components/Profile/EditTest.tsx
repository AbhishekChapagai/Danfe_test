import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import NavigationBar from '../NavigationBar';

const EditTest = () => {
  const [testDetails, setTestDetails] = useState<any>()
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
    axios.get(`http://localhost:4000/api/users/testdetails/${id}`, {
      headers: headers,
    }).then(
      (res) => {
        console.log(res.data.test)
        setTestDetails(res.data.test)

      }
    )
  }, [])
  const updateTest = (values: any) => {

    axios.patch(`http://localhost:4000/api/users/testdetails/${id}`, values, { headers: headers }).then((res) => {

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
          initialValues={testDetails}
          onSubmit={(values) => {
            updateTest(values)
          }}
        >
          <Form>
            <Grid
              container
              rowGap={2}
              justifyContent='center'
              alignItems='center'
              maxWidth={400}
              sx={{
                width: '100%',
                borderRadius: '8px',
                marginTop: '30px',
                padding: '2rem',
                position: 'relative'
              }}>

              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Test</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder=' Test Taken'
                  name="exam"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Test Score</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder=' Test Score'
                  name="score"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Attempted Date</Typography>
                <Field
                  style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                  required
                  id="outlined-required"
                  placeholder=' Attempted Date'
                  name="attemptedDate"
                />
              </Grid>
              {/* <Grid item xs={12} sm={12} md={12}> */}

              <Field
                style={{ width: '99%', height: '50px', outline: 'none', color: 'white', fontSize: '16px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: 'none', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', backgroundColor: colors.primary, cursor: 'pointer' }}
                type="submit"
                value="Update"
                autoComplete="off"
                id="register"
                name="Update"
              />
              {/* </Grid> */}

            </Grid>
          </Form>
        </Formik>
      </Box>
    </>
  )
}

export default EditTest