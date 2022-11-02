import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Typography, Tooltip } from '@mui/material'
import colors from '../../colors'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// localhost: 3000 / api / admin / studentfeedback
const AdminStudentSection = () => {
  const { id } = useParams();

  const [feedback, setFeedback] = useState<any>([])
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  // Get feedback
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEvent = async () => {
      await axios.get("http://localhost:4000/api/admin/studentfeedback", {
        headers: headers,
      }).then((res) => {
        setFeedback(res.data)
        console.log(res.data)
      })
    }

    fetchEvent();
  }, [])


  // edit request
  const editShow = (value: any, id: any) => {
    console.log(value)
    axios.patch(`http://localhost:4000/api/admin/studentfeedback/${id}`, { showInHomePage: value },
      {
        headers: headers,
      }
    ).then((res) => {
      console.log(id)
      alert("Feedback Updated")
      // window.location.href = '/admin/event'
    })
  }

  // example
  const handleClick = (value: any) => {
    return (
      console.log(value)
    )
  }
  // delete request
  const deleteRequest = (id: any) => {
    axios.delete(`http://localhost:4000/api/admin/studentfeedback/${id}`,
      {
        headers: headers,
      }
    ).then((res) => {
      alert("Feedback Deleted")
      window.location.href = '/admin/event'
    })
  }

  return (
    <>
      <Sidebar />
      <Box className='registerMainContainer' sx={{ marginLeft: '250px', padding: '1.5rem', height: '100vh' }}>
        {/* Feedback Section */}
        <Box sx={{ backgroundColor: 'white', padding: '1rem', boxShadow: '10px 10px 50px #d9d9d9, -10px -10px 50px #ffffff', borderRadius: '10px' }}>
          {/* map feedback*/}
          <Typography sx={{ fontSize: '20px', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Student Feedback Section</Typography>
          {
            feedback && feedback.allFeedbacks && feedback.allFeedbacks.map((value: any, index: any) => (
              <Box key={index} sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', columnGap: '10px', rowGap: '10px', flexDirection: 'column' }}>
                <Box sx={{ marginTop: '10px', border: '1px solid gray', width: '100%', padding: '0.5rem', borderRadius: '10px' }}>

                  <Tooltip title="Edit" onClick={() => editShow(value.showInHomePage = true, value._id)}>
                    <i className="fas fa-pen"></i>
                  </Tooltip>&nbsp;&nbsp; &nbsp;
                  <Tooltip title="Edit" onClick={() => deleteRequest(value._id)}>
                    <i className="fas fa-trash" style={{ color: 'red' }}></i>
                  </Tooltip>
                  <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Name : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.fullname}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Feedback : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.feedback}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Show in home page : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{value.showInHomePage === true ? 'true' : 'false'}</span></Typography>
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

export default AdminStudentSection