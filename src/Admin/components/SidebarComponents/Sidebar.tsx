import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.jpg'
const sidebar = () => {

    const logout = () => {
        localStorage.removeItem('loginTokenDanfeConsultancy');
        localStorage.removeItem('userID');
        window.location.href = '/'
    }
    return (
        <>
            <Box sx={{ backgroundColor: '#1b1b1b', width: '250px', height: '100vh', display: 'flex', justifyContent: 'start', flexDirection: 'column', alignItems: 'center', padding: '10px', position: 'fixed', left: '0', top: '0', bottom: '0' }}>
                {/* Logo */}
                <Box sx={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px' }}>
                    <img src={logo} alt="logo" style={{ width: '50px', height: '50px', borderRadius: '100%' }} />
                    <Typography sx={{ color: 'gray', fontSize: '12px', fontFamily: '"Poppins", sans-serif' }}>Danfe Consultancy</Typography>
                </Box>
                <Box sx={{ backgroundColor: '', height: 'fit-content', display: 'flex', flexDirection: 'column', rowGap: '30px', marginTop: '50px' }}>
                    <Link to='/admin/event' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '17px', fontFamily: '"Poppins", sans=serif', color: 'gray', cursor: 'pointer' }}><span style={{ color: 'white', fontSize: '20px' }}><i className="fas fa-calendar-minus"></i></span>&nbsp;&nbsp;&nbsp;Event</Typography></Link>
                    <Link to='/admin/university' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '17px', fontFamily: '"Poppins", sans=serif', color: 'gray', cursor: 'pointer' }}><span style={{ color: 'white', fontSize: '20px' }}><i className="fas fa-university"></i></span>&nbsp; &nbsp; &nbsp; University</Typography></Link>
                    <Link to='/admin/student' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '17px', fontFamily: '"Poppins", sans=serif', color: 'gray', cursor: 'pointer' }}><span style={{ color: 'white', fontSize: '20px' }}><i className="fas fa-user-graduate"></i></span>&nbsp; &nbsp; &nbsp; Student Section</Typography></Link>
                    <Link to='/admin/contact' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '17px', fontFamily: '"Poppins", sans=serif', color: 'gray', cursor: 'pointer' }}><span style={{ color: 'white', fontSize: '20px' }}><i className="fas fa-phone-square"></i></span>&nbsp; &nbsp; &nbsp; Call Request</Typography></Link>
                    <Link to='/admin/studentapplication' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '17px', fontFamily: '"Poppins", sans=serif', color: 'gray', cursor: 'pointer' }}><span style={{ color: 'white', fontSize: '20px' }}><i className="far fa-file"></i></span>&nbsp; &nbsp; &nbsp; Student Application</Typography></Link>
                </Box>
                <Box sx={{ position: 'absolute', bottom: '20px' }}>
                    <Typography onClick={logout} sx={{ color: 'white', fontFamily: '"Poppins", sans-serif', cursor: 'pointer' }}><i className="fas fa-cog"></i>&nbsp;&nbsp;Logout</Typography>
                </Box>
            </Box>
        </>
    )
}

export default sidebar