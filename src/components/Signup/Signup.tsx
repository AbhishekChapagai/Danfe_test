import React, { useEffect, useState } from 'react'
import { Box, Typography, Card, Stack, Grid, Avatar, TextField, Link, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox'
import useDeviceWidth from '../hooks/useDeviceWidth';
import img from '../../images/signup.png';
import FooterContainer from '../footer/FooterContainer';
import colors from '../../colors';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { display } from '@mui/system';
import '../../index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar';
// toast.configure();

const Signup = () => {
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const navigate = useNavigate()

    const register = (data: any) => {

        axios.post("http://localhost:4000/api/users", data).then((res) => {
            toast.success("User Registered");
            sessionStorage.setItem("showmsg", "1")
            window.location.href = '/login'

        }).catch((error) => {
            toast.error("User already exist");
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    // Formik validation
    const initialValues = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contactNumber,
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().max(15, "Max character is 15").required("Required*"),
        lastName: Yup.string().max(15, "Max character is 15").required("Required*"),
        email: Yup.string()
            .email("Must be a valid email")
            .required("Required*"),
        contactNumber: Yup.number()
            .min(8, "Phone number is not valid")
            .typeError("Not a phone number!")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .required("Required*"),
        password: Yup.string().min(8, "Password must be atleat 8 character").max(20).required("Required*"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords does not match"
        ).required("Required*"),
    });

    return (
        <>
            <NavigationBar />
            <Box className="registerMainContainer" sx={{ backgroundColor: '', width: '100%', height: '88.8vh', padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 13rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
                    <Typography sx={{ fontSize: '40px', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px' }}>SIgn up</Typography>
                    <Box sx={{ backgroundColor: 'white', width: isMobileSize ? '100%' : isTabletSize ? '80%' : '60%', display: 'flex', flexDirection: 'column', borderRadius: '10px', boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff' }}>
                        {/* <Box sx={{ width: '40%', height: '70vh', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='loginImage'>
                        <img src={img} alt="image of a woman" style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }} />
                        <Box sx={{ position: 'absolute', zIndex: '99', top: '50px', padding: '20px', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
                            <Typography sx={{ color: colors.primary, fontFamily: '"Inter", sans-serif', fontSize: '40px', fontWeight: 'bold', textTransform: 'capitalize' }}>Join us</Typography>
                            <Typography sx={{ color: 'white', fontFamily: '"Inter", sans-serif', fontSize: '16px' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
                                nemo. Cupiditate eligendi delectus consectetur quisquam amet eaque ab
                                officia, placeat blanditiis quos aperiam necessitatibus excepturi ex
                                assumenda porro facilis error!</Typography>
                        </Box>
                    </Box> */}

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    backgroundColor: ''
                                }}
                            >
                                {/* Formik form */}
                                <Box sx={{ backgroundColor: '', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Formik
                                        initialValues={initialValues}
                                        onSubmit={register}
                                        validationSchema={validationSchema}
                                    >
                                        <Form style={{ backgroundColor: '', width: '100%', height: '100%' }}>
                                            <Grid container sx={{ backgroundColor: '', height: '100%', justifyContent: 'center', alignItems: 'center', rowGap: '30px' }}>
                                                <Grid item xs={12} sm={6} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '0px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="firstName" component="span" /></label><br></br>
                                                    <Field
                                                        type="text"
                                                        autoComplete="off"
                                                        id="firstName"
                                                        name="firstName"
                                                        placeholder="Firstname"
                                                        style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '0px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="lastName" component="span" /></label><br></br>
                                                    <Field
                                                        type="text"
                                                        autoComplete="off"
                                                        id="lastName"
                                                        name="lastName"
                                                        placeholder="Lastname"
                                                        style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '-20px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="email" component="span" /></label>
                                                    <Field
                                                        type="email"
                                                        autoComplete="off"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '-20px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="contactNumber" component="span" /></label>
                                                    <Field
                                                        type="contactNumber"
                                                        autoComplete="off"
                                                        id="contactNumber"
                                                        name="contactNumber"
                                                        placeholder="Contact Number"
                                                        style={{ width: '98%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '-20px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="password" component="span" /></label>
                                                    <Field
                                                        type="password"
                                                        autoComplete="off"
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12} sx={{ position: 'relative', backgroundColor: '', }}>
                                                    <label style={{ color: 'red', position: 'absolute', top: '-20px', fontFamily: '"Poppins", sans-serif', fontSize: '12px', letterSpacing: '0.5px' }}><ErrorMessage name="confirmPassword" component="span" /></label>
                                                    <Field
                                                        type="password"
                                                        autoComplete="off"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        placeholder="Confirm Password"
                                                        style={{ width: '99%', height: '50px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}

                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={12}>
                                                    <Field
                                                        type="submit"
                                                        autoComplete="off"
                                                        id="register"
                                                        name="register"
                                                        style={{ width: '100%', height: '50px', borderRadius: '10px', outline: 'none', border: 'none', backgroundColor: colors.primary, color: 'white', fontSize: '18px', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px' }}
                                                        value="Register"
                                                        className="button"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    </Formik>

                                </Box>
                            </Box>
                        </Box>
                    </Box >
                </Box>
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
            </Box >

            {/* <form onSubmit={register} noValidate>
                <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    id="contactNumber"
                    label="Contact Number"
                    name="contactNumber"
                    autoComplete="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}

                >
                    Sign Up
                </Button>

            </form> */}
            {/* <FooterContainer /> */}
        </>
    )
}

export default Signup