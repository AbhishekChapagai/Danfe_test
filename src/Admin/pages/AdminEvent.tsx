import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import colors from '../../colors';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import useDeviceWidth from '../../components/hooks/useDeviceWidth';

const AdminEvent = () => {

  const [openEventAdd, setOpenEventAdd] = useState<boolean>(false);
  const [eventData, setEventData] = useState<any>([])
  const feedbackRef = useRef();
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();


  // Config
  let config = {
    width: isDesktopSize ? '98%' : '98%',
  };

  // Modal close
  const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (feedbackRef.current === e.target) {
      setOpenEventAdd(false)
    }
  }

  // Token
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  // Get Event
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEvent = async () => {
      await axios.get("http://localhost:4000/api/admin/upcomingevent", {
        headers: headers,
      }).then((res) => {
        setEventData(res.data)
        console.log(res.data)
      })
    }

    fetchEvent();
  }, [])
  // Post Event
  const addEvent = (formData: any) => {

    axios.post("http://localhost:4000/api/admin/upcomingevent", formData, {
      headers: headers,
    }).then((res) => {
      console.log(res.data);
    })
  }

  // delete request
  const deleteRequest = (id: any) => {
    axios.delete(`http://localhost:4000/api/admin/upcomingevent/${id}`,
      {
        headers: headers,
      }
    ).then((res) => {
      alert("Event Deleted")
      window.location.href = '/admin/event'
    })
  }

  return (
    <>
      <Sidebar />
      <Box className='registerMainContainer' sx={{ marginLeft: '250px', padding: '1.5rem', height: '100vh' }}>
        <Box sx={{ backgroundColor: 'white', marginTop: '50px', boxShadow: '10px 10px 50px #d9d9d9, -10px -10px 50px #ffffff', }}>
          <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', borderRadius: '5px', padding: '1rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Upcomming Events</Typography>
              <Box sx={{ display: 'flex', columnGap: '20px' }}>
                <Tooltip title="Add" onClick={() => setOpenEventAdd(true)}>
                  <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                </Tooltip>
              </Box>
            </Box>
          </Stack>
          <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', borderRadius: '5px' }}>
            <TableContainer sx={{ boxShadow: 'none', backgroundColor: '', borderBottom: '1px solid gray' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{}}>
                    <TableCell align="left" sx={{ width: '15%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Name</TableCell>
                    <TableCell align="center" sx={{ width: '40%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Description</TableCell>
                    <TableCell align="center" sx={{ width: '15%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Time</TableCell>
                    <TableCell align="center" sx={{ width: '15%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>date</TableCell>
                    <TableCell align="center" sx={{ width: '15%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Edit</TableCell>
                    <TableCell align="center" sx={{ width: '15%', fontFamily: '"Poppins", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Delete</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    eventData && eventData.events && eventData.events.map((value: any, index: any) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>
                          {value.name}
                        </TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.description}</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.time}</TableCell>
                        <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.date}</TableCell>
                        <TableCell align="center">
                          <Link to={`/admin/edit/event/${value._id}`} style={{ textDecoration: 'none', color: colors.primary }}><Tooltip title="Edit">
                            <i className="fas fa-pen"></i>
                          </Tooltip></Link>
                        </TableCell>
                        <TableCell align="center">
                          <Tooltip title="Edit" onClick={() => deleteRequest(value._id)}>
                            <i className="fas fa-trash" style={{ color: 'red' }}></i>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}

                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
          {openEventAdd &&
            <Box ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

              <Formik
                initialValues={{
                  name: '',
                  description: '',
                  time: '',
                  date: '',
                  eventImg: '',

                }}
                onSubmit={(values) => {
                  let formData = new FormData();
                  formData.append("name", values.name)
                  formData.append("description", values.description)
                  formData.append("time", values.time)
                  formData.append("date", values.date)
                  formData.append("eventImg", values.eventImg)
                  addEvent(formData);
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form style={{ backgroundColor: '', width: '600px' }}>
                    <Box sx={{ backgroundColor: 'white', padding: `${isMobileSize ? '1rem' : '3rem'}`, borderRadius: '8px', position: 'relative' }}>
                      <Box sx={{ borderBottom: '0.5px solid #ebebeb', paddingBottom: '10px' }}>
                        <Typography sx={{ textAlign: 'right', position: 'absolute', top: '10px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenEventAdd(false)}><i className="fas fa-times"></i></span></Typography>
                      </Box>
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
                              value="Add Event"
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Form>

                )}
              </Formik>
            </Box>

          }
        </Box>
      </Box >
    </>
  )
}

export default AdminEvent