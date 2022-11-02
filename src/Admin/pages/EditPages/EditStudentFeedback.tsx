import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, Button, TableBody, Grid, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, TextareaAutosize, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import useDeviceWidth from '../../../components/hooks/useDeviceWidth';
import colors from '../../../colors';

const EditStudentFeedback = () => {
    const feedbackRef = useRef();
    const [studentFeedback, setStudentFeedback] = useState<any>()
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
    const { id } = useParams();

    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/admin/studentfeedback/${id}`, {
            headers: headers,
        }).then(
            (res) => {
                console.log(res.data)
                setStudentFeedback(res.data.allFeedbacks)

            }
        )
    }, [])
    const updateFeedback = (formData: any) => {

        axios.patch(`http://localhost:4000/api/admin/studentfeedback/${id}`, formData, { headers: headers }).then((res) => {

            sessionStorage.setItem("showmsg", "1")
            window.location.href = '/admin/event'

        })

    }
    return (
        <Box ref={feedbackRef} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >
            <Formik
                enableReinitialize
                initialValues={studentFeedback}
                onSubmit={(values) => {
                    updateFeedback(values)
                }}
            >
                <Form>
                    <Grid
                        container
                        // rowSpacing={5}
                        maxWidth={600}
                        rowGap={2}
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            width: '100%',
                            borderRadius: '8px',
                            marginTop: '30px',
                            padding: '2rem',
                            position: 'relative'
                        }}>
                        <Grid item xs={12} sm={12} md={12}>

                            <Field
                                style={{ width: '100%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray', color: 'gray' }}
                                required
                                id="outlined-required"
                                placeholder='Show In Homepage'
                                name="showInHomePage"
                            />
                            <Grid item xs={12} sm={12} md={12}>

                                <Field
                                    style={{ width: '100%', height: '50px', outline: 'none', color: 'white', fontSize: '16px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: 'none', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', backgroundColor: colors.primary, cursor: 'pointer' }}
                                    type="submit"
                                    value="Update"
                                    autoComplete="off"
                                    id="register"
                                    name="Update"
                                />
                            </Grid>


                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
    )
}

export default EditStudentFeedback