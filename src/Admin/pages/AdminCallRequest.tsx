import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Typography, Tooltip } from '@mui/material'
import axios from 'axios'
import colors from '../../colors'
import { Link, useParams } from 'react-router-dom'

const AdminCallRequest = () => {

  const [application, setApplication] = useState<any>([])
  let { id } = useParams();

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  // Get Event
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEvent = async () => {
      await axios.get("http://localhost:4000/api/admin/contact", {
        headers: headers,
      }).then((res) => {
        setApplication(res.data)
        console.log(res.data)
      })
    }

    fetchEvent();
  }, [])

  // delete request
  const deleteRequest = (id: any) => {
    axios.delete(`http://localhost:4000/api/admin/contact/${id}`,
      {
        headers: headers,
      }
    ).then((res) => {
      alert("Request Deleted")
      window.location.href = '/admin/contact'
    })
  }

  return (
    <>
      <Sidebar />
      <Box className='registerMainContainer' sx={{ marginLeft: '250px', padding: '1.5rem', height: '100vh' }}>
        {/* Feedback Section */}
        <Box sx={{ backgroundColor: 'white', padding: '1rem', boxShadow: '10px 10px 50px #d9d9d9, -10px -10px 50px #ffffff', borderRadius: '10px' }}>
          {/* map feedback*/}
          <Typography sx={{ fontSize: '20px', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Call Request</Typography>
          {
            application && application.allRequests && application.allRequests.map((value: any, index: any) => (
              <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', columnGap: '10px', rowGap: '10px', flexDirection: 'column' }}>

                <Box sx={{ marginTop: '10px', border: '1px solid gray', width: '100%', padding: '0.5rem', borderRadius: '10px' }}>
                  <Tooltip title="Edit" onClick={() => deleteRequest(value._id)}>
                    <i className="fas fa-trash" style={{ color: 'red' }}></i>
                  </Tooltip>
                  <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Name : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.fullName}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Email : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.email}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Contact Number : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.contactNumber}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Country : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.countryQuery}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Subject : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.subjectQuery}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Question : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.anyQuestions}</span></Typography>
                  </Box>
                </Box>
              </Box>
            ))
          }


        </Box>
      </Box>
    </>
  )
}

export default AdminCallRequest