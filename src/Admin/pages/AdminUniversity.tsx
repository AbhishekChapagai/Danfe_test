
import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import colors from '../../colors';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import useDeviceWidth from '../../components/hooks/useDeviceWidth';

const AdminUniversity = () => {
  const [inputList, setinputList] = useState<any>([{ degree: '', duration: '' }]);
  const [openUniversityAdd, setOpenUniversityAdd] = useState<boolean>(false);
  const [eventData, setEventData] = useState<any>([])
  const [country, setCountry] = useState("")
  const [universityName, setUniversityName] = useState("")
  const [universityLocation, setUniversityLocation] = useState("")
  const [universityInfo, setUniversityInfo] = useState("")
  const [universityWebUrl, setUniversityWebUrl] = useState("")
  const [brochureDownloadLink, setBrochureDownloadLink] = useState("")
  const [undergraduateDegreeOffered, setUnderGraduateDegreeOffered] = useState("")
  const [graduateDegreeOffered, setGraduateDegreeOffered] = useState("")
  const feedbackRef = useRef();
  const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

  // Config
  let config = {
    width: isDesktopSize ? '98%' : '98%',
  };

  // Handle input add change
  const handleinputchange = (e: any, index: any) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setinputList(list);

  }

  const handleremove = (index: any) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  }

  const handleaddclick = () => {
    setinputList([...inputList, { degree: '', duration: '' }]);
  }
  // Modal close
  const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
    if (feedbackRef.current === e.target) {
      setOpenUniversityAdd(false)
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
      await axios.get("http://localhost:4000/api/admin/university", {
        headers: headers,
      }).then((res) => {
        setEventData(res.data)
      })
    }

    fetchEvent();
  }, [])
  // Post Event
  // Formik validation
  const initialValues = {
    country,
    universityName,
    universityLocation,
    universityInfo,
    universityWebUrl,
    brochureDownloadLink,
    undergraduateDegreeOffered: [{
      degree: '',
      duration: '',
    }],
    graduateDegreeOffered: [{
      degree: '',
      duration: '',
    }],
  };
  const addUniversity = (formData: any) => {

    axios.post("http://localhost:4000/api/admin/university", formData, {
      headers: headers,
    }).then((res) => {
      console.log(res.data);
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
                <Tooltip title="Add" onClick={() => setOpenUniversityAdd(true)}>
                  <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                </Tooltip>
              </Box>
            </Box>
          </Stack>
          <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', borderRadius: '5px' }}>
            <Box sx={{ width: '100%', backgroundColor: '', padding: '1rem' }}>
              <Link to='/editexperience' >
                <Tooltip title="Edit">
                  < Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-pen"></i></Typography>
                </Tooltip></Link>
              <Box sx={{ backgroundColor: '', width: '100%', marginTop: '10px', display: 'grid', gridTemplateColumns: `${isMobileSize ? 'auto auto' : isTabletSize ? 'auto auto auto' : 'auto auto auto'}`, justifyContent: 'start', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', rowGap: '10px', columnGap: '100px', }}>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Country : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>Country</span></Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>University Name : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>universityName</span></Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Location: <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>universityLocation</span></Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Information : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>universityInfo</span></Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Website URL : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>universityWebUrl</span></Typography>
                <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Brochure : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>brochureDownloadLink</span></Typography>
                <Box sx={{ backgroundColor: '', width: '100%', marginTop: '10px', display: 'grid', gridTemplateColumns: 'auto', justifyContent: 'start', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', rowGap: '10px', columnGap: '100px', }}>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Graduate Degree Offered : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>Grad Deg</span></Typography>
                  <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Undergraduate Degree Offered : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>brochureDownloadLink</span></Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
          {openUniversityAdd &&
            <Box ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

              <Formik
                initialValues={{
                  country: '',
                  universityName: '',
                  universityLocation: '',
                  universityInfo: '',
                  universityWebUrl: '',
                  brochureDownloadLink: '',
                  undergraduateDegreeOffered: {
                    degree: '',
                    duration: ''
                  },
                  graduateDegreeOffered: {
                    degree: '',
                    duration: ''
                  },
                }}
                onSubmit={(values) => {
                  console.log(values)
                  // let formData = new FormData();
                  // formData.append("country", values.country)
                  // formData.append("universityName", values.universityName)
                  // formData.append("universityLocation", values.universityLocation)
                  // formData.append("universityInfo", values.universityInfo)
                  // formData.append("universityWebUrl", values.universityWebUrl)
                  // formData.append("brochureDownloadLink", values.brochureDownloadLink)
                  // formData.append("brochureDownloadLink", values.brochureDownloadLink)
                  // addUniversity(formData);
                }}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <Grid
                      container
                      // rowSpacing={5}
                      maxWidth={600}
                      sx={{
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                        width: '100%',
                        borderRadius: '8px',
                        marginTop: '30px',
                        padding: '2rem',
                        position: 'relative'
                      }}>
                      <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenUniversityAdd(false)}><i className="fas fa-times"></i></span></Typography>
                      <Grid item xs={12} sm={12} md={4}>

                        <Field
                          style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          required
                          id="firstName"
                          name="Country"
                          placeholder="Country"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>

                        <Field
                          style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          required
                          id="firstName"
                          name="universityName"
                          placeholder="University Name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>

                        <Field
                          style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          required
                          id="firstName"
                          name="universityLocation"
                          placeholder="Location"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>

                        <Field
                          style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          required
                          id="firstName"
                          name="universityInfo"
                          placeholder="Information"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>

                        <Field
                          style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          required
                          id="firstName"
                          name="universityWebUrl"
                          placeholder="Website"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Level</Typography>
                        <input
                          type="file"
                          name="file"
                          style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                          onChange={(e: any) => {
                            setFieldValue("brochureDownloadLink", e.target.files[0]);

                          }}
                        />
                      </Grid>
                      {/* Mapping input fields */}
                      <Box sx={{ backgroundColor: 'red', width: '100%' }}>
                        <Box sx={{}}>
                          <Typography>Gradauate</Typography>
                          {
                            inputList.map((x: any, i: any) => {
                              return (
                                <>
                                  <Grid item xs={12} sm={12} md={12}>

                                    <Field
                                      style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                      required
                                      // id="firstName"
                                      name="graduateDegreeOffered.degree"
                                      placeholder="Degree"
                                      value={x.degree}
                                      onChange={(e: any) => handleinputchange(e, i)}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={12}>

                                    <Field
                                      style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                      required
                                      // id="firstName"
                                      name="graduateDegreeOffered.duration"
                                      placeholder="Duration"
                                      value={x.duration}
                                      onChange={(e: any) => handleinputchange(e, i)}
                                    />
                                  </Grid>
                                  <div style={{ display: 'flex' }}>
                                    {inputList.length - 1 === i &&
                                      <button style={{ width: '100%', padding: '10px' }} onClick={handleaddclick}>Add More</button>
                                    }
                                    {
                                      inputList.length !== 1 &&
                                      <button style={{ width: '100%' }} onClick={() => handleremove(i)}>Remove</button>
                                    }

                                  </div>
                                </>
                              );
                            })}
                        </Box>
                        {/* Mapping input fields */}
                        {/* <Box>
                          <Typography>Under Graduate</Typography>
                          {
                            inputList.map((x: any, i: any) => {
                              return (
                                <>
                                  <Grid item xs={12} sm={12} md={12}>

                                    <Field
                                      style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                      required
                                      id="firstName"
                                      name="undergraduateDegreeOffered.degree"
                                      placeholder="Degree"
                                      onChange={(e: any) =>{handleinputchange(e, i)}}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={12} md={12}>

                                    <Field
                                      style={{ width: '100%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                      required
                                      id="firstName"
                                      name="undergraduateDegreeOffered.duration"
                                      placeholder="Duration"
                                      onChange={(e: any) =>{handleinputchange(e, i)}}
                                    />
                                  </Grid>
                                  <div style={{ display: 'flex' }}>
                                    {inputList.length - 1 === i &&
                                      <button style={{ width: '100%', padding: '10px' }} onClick={handleaddclick}>Add More</button>
                                    }
                                    {
                                      inputList.length !== 1 &&
                                      <button style={{ width: '100%' }} onClick={() => handleremove(i)}>Remove</button>
                                    }

                                  </div>
                                </>
                              );
                            })}
                        </Box> */}
                      </Box>

                      {/*  */}
                      <Grid item xs={12} sm={12} md={6}>
                        <Field
                          type="submit"
                          style={{ width: '200px', height: '50px', marginTop: '20px', backgroundColor: colors.primary, cursor: 'pointer', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                          id="outlined-required"
                          value="Upload Photo"
                        />
                      </Grid>
                    </Grid>
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

export default AdminUniversity