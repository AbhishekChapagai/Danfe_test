import React, { useEffect, useState, useRef } from 'react'
import { Box, Stack, Typography, Button, TableBody, TableContainer, Table, TableCell, TableRow, TableHead, Tooltip, Card, Grid, TextareaAutosize, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import useDeviceWidth from '../hooks/useDeviceWidth';
import profileIMG from '../../images/graduation.jpg';
import noUser from '../../images/noUser.png';
import colors from '../../colors';
import img from '../../images/graduation.jpg'
import imgOne from '../../images/doctor.jpg'
import imgTwo from '../../images/world.jpg'
import FooterContainer from '../footer/FooterContainer';
import StudentFeedbackPage from '../Home/StudentFeedbackComponents/StudentFeedbackPage';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import NavigationBar from '../NavigationBar';



interface d {
    schoolName?: String;
    degree?: String;
    fieldOfStudy?: String;
    startDate?: String;
    endDate?: String;
    data?: any;
}

interface datas {

    data?: d[]
}


const Profile = () => {

    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
    const [openFeedback, setOpenFeedback] = useState<boolean>(false);
    const [openPhotoAdd, setOpenPhotoAdd] = useState<boolean>(false);
    const [openAcademicsAdd, setOpenAcademicsAdd] = useState<boolean>(false);
    const [openExperienceAdd, setOpenExperienceAdd] = useState<boolean>(false);
    const [openTestAdd, setOpenTestAdd] = useState<boolean>(false);
    const [openCountryAdd, setOpenCountryAdd] = useState<boolean>(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [profileIMG, setProfileIMG] = useState<any>("");

    //Academics state 
    const [schoolName, setSchoolName] = useState("")
    const [degree, setDegree] = useState("")
    const [fieldOfStudy, setFieldOfStudy] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    // Experience state
    const [jobTitle, setJobTitle] = useState("")
    const [employmentType, setEmploymentType] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyAddress, setCompanyAddress] = useState("")
    const [companyJoinDate, setCompanyJoinDate] = useState("")
    const [companyLeaveDate, setCompanyLeaveDate] = useState("")
    // Test state
    const [exam, setExam] = useState("")
    const [score, setScore] = useState("")
    const [attemptedDate, setAttemptedDate] = useState("")
    // Contry Uni state
    const [country, setCountry] = useState("")
    const [university, setUniversity] = useState("")
    const [course, setCourse] = useState("")
    const [intake, setIntake] = useState("")
    const [budget, setBudget] = useState("")
    const [scholarship, setScholarship] = useState("")


    // Get academic, experience, testdata, country details use state
    const [academic, setAcademics] = useState<any>([])
    const [experience, setExperience] = useState<any>([])
    const [testData, setTestData] = useState<any>([])
    const [countryuni, setCountryuni] = useState<any>([])

    // Feedback
    const [fullname, setFullname] = useState("")
    const [feedback, setFeedback] = useState("")


    let { _id } = useParams();
    // const UserId = parseInt(id);
    const feedbackRef = useRef();

    let config = {
        width: isDesktopSize ? '100%' : '100%',
    };


    // To close modal when clicking in a certain div

    const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
        if (feedbackRef.current === e.target) {
            setOpenFeedback(false)
            setOpenAcademicsAdd(false)
            setOpenExperienceAdd(false)
            setOpenCountryAdd(false)
            setOpenPhotoAdd(false)
            setOpenFeedback(false)
        }
    }
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    // code for showing toast
    if (sessionStorage.getItem("showmsg") == '1') {
        toast.success("Updated");
        sessionStorage.removeItem("showmsg");
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            await axios.get("http://localhost:4000/api/users/personaldetails", {
                headers: headers,
            }).then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setContactNumber(res.data.contactNumber);
            })
        }

        const fetchAcademicDetails = async () => {
            await axios.get("http://localhost:4000/api/users/academicdetails", {
                headers: headers,
            }).then((res) => {
                setAcademics(res.data)
            })
        }


        const fetchExperienceDetails = async () => {
            await axios.get("http://localhost:4000/api/users/experiencedetails", {
                headers: headers,
            }).then((res) => {
                console.log(res.data)
                setExperience(res.data)
            })
        }

        const fetchTestDetails = async () => {
            await axios.get("http://localhost:4000/api/users/testdetails/", {
                headers: headers,
            }).then((res) => {
                console.log(res.data)
                setTestData(res.data)
            })
        }

        const fetchCountryuni = async () => {
            await axios.get("http://localhost:4000/api/users/countryuni/", {
                headers: headers,
            }).then((res) => {
                console.log(res.data)
                setCountryuni(res.data)
            })
        }

        const fetchProfile = async () => {
            await axios.get("http://localhost:4000/api/users/profilepic", {
                headers: headers,
            }).then((res) => {
                console.log("profile", res.data)
                setProfileIMG(res.data)
            })
        }

        fetchData();
        fetchAcademicDetails();
        fetchExperienceDetails();
        fetchTestDetails();
        fetchCountryuni();
        fetchProfile();
    }, [])
    // Post profile photo
    const addProfilePhoto = (formData: FormData) => {

        axios.post("http://localhost:4000/api/users/profilepic", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
            },
        }).then((res) => {
            toast.success("Photo Updated");
            window.location.href = '/profile'

        }).catch((error) => {
            toast.error("Unable to update photo")
        })
    }

    const postFeedback = (e: any) => {
        e.preventDefault();

        const studentFeedbackData = {
            fullname,
            feedback,
        };

        axios.post("http://localhost:4000/api/users/feedback", studentFeedbackData, { headers: headers }).then((res) => {
            toast.success("Feedback Registered");

        }).catch((error) => {
            toast.error("Failed to register feedback");
        })
    }
    // add academic data
    const addAcademics = (e: any) => {
        e.preventDefault();

        const academics = {
            schoolName,
            degree,
            fieldOfStudy,
            startDate,
            endDate
        };

        axios.post("http://localhost:4000/api/users/academicdetails/", academics, {
            headers: headers,
        }).then((res) => {
            toast.success("Academics Added");
            window.location.href = '/profile'
        })
    }
    // Add Experience
    const addExperience = (e: any) => {
        e.preventDefault();

        const experience = {
            jobTitle,
            employmentType,
            companyName,
            companyAddress,
            companyJoinDate,
            companyLeaveDate,
        };

        axios.post("http://localhost:4000/api/users/experiencedetails/", experience, {
            headers: headers,
        }).then((res) => {
            toast.success("Experience Added");
            window.location.href = '/profile'
        })
    }
    // add test
    const addTest = (e: any) => {
        e.preventDefault();
        const test = {
            exam,
            score,
            attemptedDate,
        };

        axios.post("http://localhost:4000/api/users/testdetails/", test, {
            headers: headers,
        }).then((res) => {
            toast.success("Test Added");
            window.location.href = '/profile'
        }).catch((error) => {
            console.log(error.data)
        })
    }
    // add country university
    const addCountryUni = (e: any) => {
        e.preventDefault();
        const countryuni = {
            country,
            university,
            course,
            intake,
            budget,
            scholarship,
        };

        axios.post("http://localhost:4000/api/users/countryuni/", countryuni, {
            headers: headers,
        }).then((res) => {
            toast.success("Experience Added");
            window.location.href = '/profile'
        })
    }

    return (
        <>
            <NavigationBar />
            <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', position: 'relative' }}>
                {/* Profile image */}
                <Box sx={{ width: '100%', height: '30vh', backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', columnGap: '20px' }}>
                    <Box sx={{ width: '100px', height: '100px', backgroundColor: '', position: 'absolute', border: `10px solid ${colors.primary}`, left: 0, bottom: '0', borderRadius: '100%', opacity: '0.1', zIndex: '-2' }}></Box>
                    <Box sx={{ width: '70px', height: '70px', backgroundColor: '', position: 'absolute', border: `10px solid gray`, right: 0, top: '20px', borderRadius: '100%', opacity: '0.1', zIndex: '-2' }}></Box>
                    <Box onClick={() => setOpenPhotoAdd(true)} sx={{ backgroundColor: '', width: `${isMobileSize ? '250px' : '200px'}`, height: `${isMobileSize ? '250px' : '200px'}`, borderRadius: '100%', cursor: 'pointer' }}>
                        {profileIMG && profileIMG.user && profileIMG.user.photo ?
                            <img src={`http://localhost:4000/${profileIMG && profileIMG.user && profileIMG.user.photo}`} alt="profile image" style={{ width: '100%', height: '100%', borderRadius: '100%', objectFit: 'cover' }} />
                            : <img src={noUser} alt="user" style={{ width: '100%', height: '100%', borderRadius: '100%', objectFit: 'cover' }} />}
                    </Box>
                    {/* Add Academic Details */}
                    {openPhotoAdd &&
                        <Box ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >
                            <Formik
                                initialValues={{
                                    image: '',
                                }}
                                onSubmit={(values) => {
                                    let formData = new FormData();
                                    formData.append("image", values.image)
                                    addProfilePhoto(formData);
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
                                            <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenPhotoAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Level</Typography>
                                                <input
                                                    type="file"
                                                    name="file"
                                                    style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                                    onChange={(e: any) => {
                                                        setFieldValue("image", e.target.files[0]);

                                                    }}
                                                />
                                            </Grid>
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

                {/* Personal details */}

                <Box sx={{ marginTop: '50px', backgroundColor: '', display: 'flex', flexDirection: `${isTabletSize ? 'column' : 'row'}`, columnGap: '20px', rowGap: '20px' }}>
                    <Stack sx={{ width: `${isTabletSize ? '100%' : '30%'}`, height: '400px', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', borderRadius: '5px', padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ width: 'fit-content', fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px', color: 'black', marginBottom: '10px' }}>Personal Details</Typography>
                            <Link to={`/editpersonal`} style={{ textDecoration: 'none', color: colors.primary }}><Tooltip title="Edit">
                                <i className="fas fa-pen"></i>
                            </Tooltip></Link>
                        </Box>
                        <Box sx={{ backgroundColor: '', marginTop: '20px', width: 'fit-content', display: 'flex', justifyContent: 'start', alignItems: 'start', flexDirection: 'column', rowGap: '13px', flexWrap: 'wrap' }}>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Name : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>{firstName} {lastName}</span></Typography>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Email : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>{email}</span></Typography>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Date Of Birth : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>2058-08-17</span></Typography>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Contact Number : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>{contactNumber}</span></Typography>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Temporary Address : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>Chardobato, Bhaktapur</span></Typography>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px' }}>Permanent Address : <span style={{ color: '#454545', fontWeight: 'normal', fontSize: '13px' }}>New Baneswar, Kathmandu</span></Typography>
                        </Box>
                    </Stack>
                    <Stack sx={{ width: `${isTabletSize ? '100%' : '70%'}`, height: '', backgroundColor: 'white', padding: '1rem', borderRadius: '5px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff' }}>
                        <Box sx={{ backgroundColor: '', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Academic Details</Typography>
                            <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                <Tooltip title="Add" onClick={() => setOpenAcademicsAdd(true)}>
                                    <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: isMobileSize ? 'auto' : isTabletSize ? 'auto auto' : 'auto auto auto', marginTop: '40px', justifyContent: 'space-evenly', rowGap: '20px', alignItems: 'start' }}>
                            {
                                academic && academic.data && academic.data.map((value: any, index: any) => {
                                    return (
                                        <>
                                            <Box key={index} sx={{ backgroundColor: '', width: '260px', height: '300px', padding: '1rem', border: '1px solid #d9d9d9', borderRadius: '5px' }}>
                                                <Link to={'/editacademics/' + value._id}><Tooltip title="Edit">
                                                    <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-pen"></i></Typography>
                                                </Tooltip></Link>
                                                <Box sx={{
                                                    backgroundColor: '', width: '100%', marginTop: '10px', display: 'grid', gridTemplateColumns: `${isMobileSize ? 'auto' : 'auto'}`, justifyContent: 'start', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', rowGap: '10px', columnGap: '50px'
                                                }}>
                                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Level : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.degree}</span></Typography>
                                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Institution : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.schoolName}</span></Typography>
                                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Field of Study : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.fieldOfStudy}</span></Typography>
                                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Start Date : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.startDate}</span></Typography>
                                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>End date : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.endDate}</span></Typography>
                                                </Box>
                                            </Box>
                                        </>
                                    )
                                })}
                        </Box>
                    </Stack>

                    {/* Add Academic Details */}
                    {openAcademicsAdd &&
                        <Box component="form" onSubmit={addAcademics} ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

                            <Grid
                                container
                                // rowSpacing={5}
                                maxWidth={600}
                                sx={{
                                    backgroundColor: 'white',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                    width: '100%',
                                    rowGap: '10px',
                                    borderRadius: '8px',
                                    marginTop: '30px',
                                    padding: '2rem',
                                    position: 'relative'
                                }}>
                                <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenAcademicsAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Level</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='High School / Bachelors / Masters'
                                        value={degree}
                                        onChange={(e) => setDegree(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Institution Name</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Institution Name'
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Field of Study</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Faculty'
                                        value={fieldOfStudy}
                                        onChange={(e) => setFieldOfStudy(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Start Date</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Start Date'
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>End Date</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='End Date'
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </Grid>
                                <Button type="submit" onSubmit={addAcademics} variant='contained' sx={{ width: '100%', padding: '1rem', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Add Academic Details</Button>
                            </Grid>
                        </Box>
                    }

                </Box>

                {/* Experience */}

                <Box sx={{ backgroundCOlor: '', marginTop: '50px' }}>
                    <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem', flexWrap: 'wrap  ' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Experience Details</Typography>
                            <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                <Tooltip title="Add" onClick={() => setOpenExperienceAdd(true)}>
                                    <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                                </Tooltip>
                            </Box>
                        </Box>
                        {
                            experience && experience.data && experience.data.map((value: any, index: any) => {
                                return (
                                    <Box sx={{ padding: '1rem', border: '1px solid  #d9d9d9', borderRadius: '5px', marginTop: '10px' }}>
                                        <Link to={'/editexperience/' + value._id}><Tooltip title="Edit">
                                            <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-pen"></i></Typography>
                                        </Tooltip></Link>
                                        <Box sx={{ backgroundColor: '', width: '100%', marginTop: '10px', display: 'grid', gridTemplateColumns: `${isMobileSize ? 'auto' : isTabletSize ? 'auto auto' : 'auto auto auto'}`, justifyContent: 'start', alignItems: 'start', flexDirection: 'row', flexWrap: 'wrap', rowGap: '10px', columnGap: '100px', }}>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Job Title : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.jobTitle}</span></Typography>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Employment Type : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.employmentType}</span></Typography>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Company Name : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.companyName}</span></Typography>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Address : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.companyAddress}</span></Typography>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>Start Date : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.companyJoinDate}</span></Typography>
                                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', fontWeight: '', letterSpacing: '0.7px', color: 'black' }}>End Date : <span style={{ color: '#7a7a7a', fontWeight: 'normal', fontSize: '13px' }}>{value.companyLeaveDate}</span></Typography>
                                        </Box>
                                    </Box>
                                )
                            })

                        }
                    </Stack>

                    {openExperienceAdd &&
                        <Box component="form" onSubmit={addExperience} ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

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
                                    padding: '1.5rem',
                                    rowGap: '10px',
                                    position: 'relative'
                                }}>
                                <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenExperienceAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }, marginTop: '20px' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Job Title'
                                        value={jobTitle}
                                        onChange={(e) => setJobTitle(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{
                                            ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }
                                        }}
                                        required
                                        id="outlined-required"
                                        placeholder='Part-time / Permanent / Contract'
                                        value={employmentType}
                                        onChange={(e) => setEmploymentType(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{
                                            ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }
                                        }}
                                        required
                                        id="outlined-required"
                                        placeholder='Company Name'
                                        value={companyName}
                                        onChange={(e) => setCompanyName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{
                                            ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }
                                        }}
                                        required
                                        id="outlined-required"
                                        placeholder='Address'
                                        value={companyAddress}
                                        onChange={(e) => setCompanyAddress(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{
                                            ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }
                                        }}
                                        required
                                        id="outlined-required"
                                        placeholder='Start Date'
                                        value={companyJoinDate}
                                        onChange={(e) => setCompanyJoinDate(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <TextField
                                        sx={{
                                            ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', "& input::placeholder": { fontSize: "16px" }
                                        }}
                                        required
                                        id="outlined-required"
                                        placeholder='End Date'
                                        value={companyLeaveDate}
                                        onChange={(e) => setCompanyLeaveDate(e.target.value)}
                                    />
                                </Grid>

                                <Button type="submit" onSubmit={addExperience} variant='contained' sx={{ width: '100%', padding: '1rem', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Add Experience</Button>
                            </Grid>
                        </Box>

                    }

                </Box>

                {/* Test and Test Score */}
                <Box sx={{ backgroundCOlor: '', marginTop: '50px' }}>
                    <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Test and Test Score</Typography>
                            <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                <Tooltip title="Add" onClick={() => setOpenTestAdd(true)}>
                                    <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                        <TableContainer component={Paper} sx={{ boxShadow: 'none', }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f7f1e9' }}>
                                        <TableCell align="left" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Test</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Test Score</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Attempted Date</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Edit</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {testData && testData.data && testData.data.map((value: any, index: any) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>
                                                {value.exam}
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.score}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.attemptedDate}</TableCell>
                                            <TableCell align="center">
                                                <Link to={`/edittest/${value._id}`} style={{ textDecoration: 'none', color: colors.primary }}><Tooltip title="Edit">
                                                    <i className="fas fa-pen"></i>
                                                </Tooltip></Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                    {openTestAdd &&
                        <Box component="form" onSubmit={addTest} ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

                            <Grid
                                container
                                // rowSpacing={5}
                                maxWidth={400}
                                sx={{
                                    backgroundColor: 'white',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                    width: '100%',
                                    borderRadius: '8px',
                                    marginTop: '30px',
                                    padding: '2rem',
                                    rowGap: '10px',
                                    position: 'relative'
                                }}>
                                <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenTestAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Test</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder=' Test Taken'
                                        value={exam}
                                        onChange={(e) => setExam(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Test Score</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder=' Test Score'
                                        value={score}
                                        onChange={(e) => setScore(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Attempted Date</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder=' Attempted Date'
                                        value={attemptedDate}
                                        onChange={(e) => setAttemptedDate(e.target.value)}
                                    />
                                </Grid>
                                <Button type="submit" onSubmit={addTest} variant='contained' sx={{ width: '100%', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Add Test</Button>
                            </Grid>
                        </Box>

                    }
                </Box>

                {/* Country and University */}
                <Box sx={{ backgroundCOlor: '', marginTop: '50px' }}>
                    <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Preferred Country And University</Typography>
                            <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                <Tooltip title="Add" onClick={() => setOpenCountryAdd(true)}>
                                    <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack sx={{ width: '100%', height: 'auto', backgroundColor: '', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                        <TableContainer component={Paper} sx={{ boxShadow: 'none', }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f7f1e9' }}>
                                        <TableCell align="left" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Country</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>University</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Course</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Intake</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Budget</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Scholarship</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'uppercase' }}>Edit</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {countryuni && countryuni.data && countryuni.data.map((value: any, index: any) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>
                                                {value.country}
                                            </TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.university}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.course}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.intake}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.budget}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>{value.scholarship == "Yes" || value.scholarship == "yes" ? <span style={{ color: 'lightgreen', fontSize: '16px' }}><i className="far fa-check-circle"></i></span> : <span style={{ color: 'red', fontSize: '16px' }}><i className="fas fa-times-circle"></i></span>}</TableCell>
                                            <TableCell align="center" sx={{ fontFamily: '"Poppins", sans-serif', letterSpacing: '0.7px', fontSize: '16px' }}>
                                                <Link to={`/editcountry/${value._id}`} style={{ textDecoration: 'none', color: colors.primary }}><Tooltip title="Edit">
                                                    <i className="fas fa-pen"></i>
                                                </Tooltip></Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                    {openCountryAdd &&
                        <Box component="form" onSubmit={addCountryUni} ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

                            <Grid
                                container
                                // rowSpacing={5}
                                maxWidth={400}
                                sx={{
                                    backgroundColor: 'white',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    rowGap: '15px',
                                    marginTop: '30px',
                                    padding: '2rem',
                                    position: 'relative'
                                }}>
                                <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenCountryAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Country</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Country'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>University</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='University'
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Course</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Course'
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Intake</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Intake'
                                        value={intake}
                                        onChange={(e) => setIntake(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Budget</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Budget'
                                        value={budget}
                                        onChange={(e) => setBudget(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Scholarship</Typography>
                                    <TextField
                                        sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', textTransform: 'capitalize' }}
                                        required
                                        id="outlined-required"
                                        placeholder='Yes/No'
                                        value={scholarship}
                                        onChange={(e) => setScholarship(e.target.value)}
                                    />
                                </Grid>

                                <Button type="submit" onSubmit={addCountryUni} variant='contained' sx={{ width: '100%', padding: '1rem', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Add Preferred Country</Button>
                            </Grid>
                        </Box>

                    }
                </Box>

                {/* Document Gallery */}

                {/* <Box sx={{ backgroundCOlor: '', marginTop: '50px' }}>
                    <Box sx={{ width: '100%', height: 'auto', backgroundColor: '', display: 'flex', flexDirection: "column", rowGap: '0px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                        <Stack sx={{ backgroundColor: '' }}>
                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Document Gallery</Typography>
                        </Stack>
                        <Box sx={{ backgroundColor: '', marginTop: '25px', display: 'flex', justifyContent: 'start', alignItems: 'center', columnGap: '30px' }}>
                            <Card sx={{ width: '200px', height: '200px' }}>
                                <img src={img} alt="Image of a document" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Card>
                            <Card sx={{ width: '200px', height: '200px' }}>
                                <img src={imgOne} alt="Image of a document" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Card>
                            <Card sx={{ width: '200px', height: '200px' }}>
                                <img src={imgTwo} alt="Image of a document" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Card>
                        </Box>
                    </Box>
                </Box> */}

                {/* Feedback Section */}
                <Box sx={{ backgroundCOlor: '', marginTop: '50px', boxShadow: '10px 10px 60px #d9d9d9, -10px -10px 60px #ffffff', borderRadius: '5px', padding: '1rem' }}>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '20px' }}>Give Your Feedback For Danfe</Typography>
                    <Button variant='contained' sx={{ backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, }} onClick={() => setOpenFeedback(true)}>Give Feedback</Button>
                </Box>

            </Box>

            {/* Feedback Form */}

            {
                openFeedback && (
                    <Box component="form" onSubmit={postFeedback} ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

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
                                position: 'relative',
                                rowGap: '20px'
                            }}>
                            <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenFeedback(false)}><i className="fas fa-times"></i></span></Typography>
                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '5px !important' }}
                                    required
                                    id="outlined-required"
                                    placeholder='Fullname'
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                                <textarea
                                    // sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                    style={{ width: '100%', height: '200px', resize: "none", fontFamily: '"Poppins", sans-serif', fontSize: '12px !important', padding: '5px', outline: 'none', border: '1px solid #d0d0d0', borderRadius: '5px' }}
                                    required
                                    id="outlined-required"
                                    placeholder='Your Feedback'
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                />
                            </Grid>

                            <Button type="submit" onSubmit={postFeedback} variant='contained' sx={{ width: '100%', height: '60px', padding: '1rem', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Send Feedback</Button>
                        </Grid>
                    </Box>

                )
            }
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <FooterContainer />
        </>
    )
}

export default Profile