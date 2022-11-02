import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import colors from '../../colors';
import useDeviceWidth from '../hooks/useDeviceWidth';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import NavigationBar from '../NavigationBar';


const EditAcademics = () => {

    const [academicDetails, setAcademicsDetails] = useState<any>()
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
        axios.get(`http://localhost:4000/api/users/academicdetails/${id}`, {
            headers: headers,
        }).then(
            (res) => {
                console.log(res.data.academic)
                setAcademicsDetails(res.data.academic)

            }
        )
    }, [])
    const updateAcademics = (values: any) => {

        axios.patch(`http://localhost:4000/api/users/academicdetails/${id}`, values, { headers: headers }).then((res) => {

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
                    initialValues={academicDetails}
                    onSubmit={(values) => {
                        updateAcademics(values)
                    }}
                >
                    <Form>
                        <Grid
                            container
                            // rowSpacing={5}
                            maxWidth={600}
                            rowGap={1}
                            justifyContent='center'
                            alignItems='center'
                            sx={{
                                width: '100%',
                                borderRadius: '8px',
                                marginTop: '80px',
                                padding: '2rem',
                                position: 'relative'
                            }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Level</Typography>
                                <Field
                                    style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                                    required
                                    id="outlined-required"
                                    placeholder='High School / Bachelors / Masters'
                                    name="degree"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Institution Name</Typography>
                                <Field
                                    style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', textTransform: 'capitalize', color: 'gray' }}
                                    required
                                    id="outlined-required"
                                    placeholder='Institution Name'
                                    name="schoolName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Field of Study</Typography>
                                <Field
                                    style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', textTransform: 'capitalize', color: 'gray' }}
                                    required
                                    id="outlined-required"
                                    placeholder='Faculty'
                                    name="fieldOfStudy"

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Start Date</Typography>
                                <Field
                                    style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', textTransform: 'capitalize', color: 'gray' }}
                                    required
                                    id="outlined-required"
                                    placeholder='Start Date'
                                    name="startDate"

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} sx={{ marginBottom: '40px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>End Date</Typography>
                                <Field
                                    style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', textTransform: 'capitalize', color: 'gray' }}
                                    required
                                    id="outlined-required"
                                    placeholder='End Date'
                                    name="endDate"

                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} sx={{}}>
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

export default EditAcademics