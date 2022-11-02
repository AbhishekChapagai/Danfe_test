import React from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Typography } from '@mui/material'

const AdminHome = () => {
  return (
    <>
      <Sidebar />
      <Box sx={{ marginLeft: '250px', padding: '1.5rem', height: '100vh', backgroundColor: 'red' }}>
        <div>AdminEvent</div>
      </Box>
    </>
  )
}

export default AdminHome