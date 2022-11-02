import React, { useEffect, useState } from 'react'
import {
    Box, Typography, Stack, Button, Grid
} from '@mui/material';
import FooterContainer from '../footer/FooterContainer'
import useDeviceWidth from '../hooks/useDeviceWidth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import img from '../../images/library.jpg'
import '../../index.css'
import colors from '../../colors';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../NavigationBar';

const EventPage = () => {
    const [event, setEvent] = useState<any>([])
    const { isMobileSize, isTabletSize } = useDeviceWidth();

    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            await axios.get("http://localhost:4000/api/users/upcomingevents", {
                headers: headers,
            }).then((res) => {
                setEvent(res.data);
                console.log("hello there", res.data)
            })
        }
        fetchData()
    }, [])
    return (
        <>
            <NavigationBar />
            <Box className="eventPage" sx={{ position: 'relative', weight: '100%', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img} alt="event image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Typography sx={{ fontFamily: '"Inter", sans-serif', position: 'absolute', zIndex: '99', color: 'white', fontSize: '90px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.8px' }}>Events</Typography>
            </Box>
            <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', rowGap: '20px' }}>
                {
                    event && event.upcomingEvents && event.upcomingEvents.map((value: any, index: any) => (
                        <Stack key={index} sx={{ width: '100%', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', padding: '1.5rem', borderRadius: '5px', }}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '25px', fontWeight: 'bold' }}>{value.name}</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Box sx={{ display: 'flex', backgroundColor: '', justifyContent: 'end', columnGap: '20px' }}>
                                        <Typography sx={{ color: 'gray', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><AccessTimeIcon />&nbsp;{value.time}</Typography>
                                        <Typography sx={{ color: 'gray', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 'bold', textAlign: 'right', display: 'flex', justifyContent: 'end', alignItems: 'center' }}><EventAvailableIcon />&nbsp;{value.date}</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Stack sx={{ marginTop: '10px' }}>
                                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', wordSpacing: '2px' }}>
                                    {value.description}
                                </Typography>
                            </Stack>
                            <Link to={'/admin/event/' + value._id} style={{ textDecoration: 'none' }}><Button variant='contained' sx={{ marginTop: '30px', width: '200px', padding: '0.8rem', fontFamily: '"Inter", sans-serif', letterSpacing: '0.5px', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary } }}>View Event</Button></Link>
                        </Stack>
                    ))}
            </Box>
            <FooterContainer />
        </>
    )
}

export default EventPage