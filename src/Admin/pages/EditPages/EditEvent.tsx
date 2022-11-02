import React, { useEffect, useRef, useState } from 'react'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import useDeviceWidth from '../../../components/hooks/useDeviceWidth';
import colors from '../../../colors';



const EditEvent = () => {
    const feedbackRef = useRef();
    const [eventDetails, setEventDetails] = useState<any>()
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
    const { id } = useParams();

    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/api/admin/upcomingevent/${id}`, {
            headers: headers,
        }).then(
            (res) => {
                console.log(res.data)
                setEventDetails(res.data)

            }
        )
    }, [])
    const updateEvent = (formData: any) => {

        axios.patch(`http://localhost:4000/api/admin/upcomingevent/${id}`, formData, { headers: headers }).then((res) => {

            sessionStorage.setItem("showmsg", "1")
            window.location.href = '/admin/event'

        })

    }

    return (
        <>
            <Box ref={feedbackRef} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >
                <Formik
                    enableReinitialize
                    initialValues={eventDetails && eventDetails.event}
                    onSubmit={(values) => {
                        let formData = new FormData();
                        formData.append("name", values.name)
                        formData.append("description", values.description)
                        formData.append("time", values.time)
                        formData.append("date", values.date)
                        formData.append("eventImg", values.eventImg)
                        console.log("form", values)
                        updateEvent(formData);
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form style={{ backgroundColor: '', width: '600px' }}>
                            <Box sx={{ backgroundColor: 'white', padding: `${isMobileSize ? '1rem' : '3rem'}`, borderRadius: '8px', position: 'relative' }}>
                                <Box sx={{ width: '100%', marginTop: '20px', backgroundColor: '' }}>

                                    <Grid
                                        container
                                        sx={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            marginTop: '30px',
                                            rowGap: '10px'
                                        }}
                                    >
                                        <Grid item xs={12} sm={12} md={12}>

                                            <Field
                                                style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="firstName"
                                                name="name"
                                                placeholder="Event Name"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>

                                            <Field
                                                style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="outlined-required"
                                                name="description"
                                                placeholder="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>

                                            <Field
                                                style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="outlined-required"
                                                name="time"
                                                placeholder="Event Time"

                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>

                                            <Field
                                                style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                type='text'
                                                name="date"
                                                placeholder="Event Date"

                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Event Image</Typography>
                                            <input
                                                type="file"
                                                style={{ width: '100%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                                onChange={(e: any) => {
                                                    setFieldValue("eventImg", e.target.files[0]);

                                                }}
                                                placeholder="Event Image"

                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={12}>

                                            <Field
                                                type="submit"
                                                style={{ width: '100%', height: '50px', marginTop: '20px', backgroundColor: colors.primary, cursor: 'pointer', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                value="Edit Event"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Form>

                    )}
                </Formik>
            </Box>
        </>
    )
}

export default EditEvent