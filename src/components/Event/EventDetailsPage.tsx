import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import img from '../../images/graduation.jpg'
import FooterContainer from '../footer/FooterContainer';
import useDeviceWidth from '../hooks/useDeviceWidth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import NavigationBar from '../NavigationBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EventDetailsPage = () => {
    const { isMobileSize, isTabletSize } = useDeviceWidth();
    const [eventDetail, setEventDetails] = useState<any>()
    const { id } = useParams();

    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`http://localhost:4000/api/admin/upcomingevent/${id}`, {
            headers: headers,
        }).then(
            (res) => {
                setEventDetails(res.data)
                console.log("Image", res.data)
            }
        )
    }, [])
    console.log("hello", eventDetail && eventDetail.event && eventDetail.event.eventImg)
    const imgURl = 'http://localhost:4000/'
    return (
        <>
            <NavigationBar />
            <Box sx={{ height: '88.5vh' }}>
                <img src={`http://localhost:4000/${eventDetail && eventDetail.event && eventDetail.event.eventImg}`} alt="events image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', backgroundColor: '', weight: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: '50px', alignItems: 'center', marginTop: '50px', marginBottom: '60px' }}>
                <Stack sx={{ width: '100%' }}>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '30px', fontWeight: 'bold' }}>{eventDetail && eventDetail.event.name}</Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '10px', color: 'gray' }}><AccessTimeIcon />&nbsp;&nbsp;{eventDetail && eventDetail.event.time}</Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '10px', color: 'gray' }}><DateRangeIcon />&nbsp;&nbsp;{eventDetail && eventDetail.event.date}</Typography>
                </Stack>
                <Stack sx={{ backgroundColor: '', width: '100%' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '16px', letterSpacing: '0.5px', wordSpacing: '2px' }}>{eventDetail && eventDetail.event.description}</Typography>
                </Stack>
            </Box>
            <FooterContainer />
        </>
    )
}

export default EventDetailsPage