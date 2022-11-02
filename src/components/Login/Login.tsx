import React, { useEffect, useState } from 'react'
import { Box, Typography, Card, Stack, Grid, Avatar, TextField, Link, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox'
import useDeviceWidth from '../hooks/useDeviceWidth';
import img from '../../images/girl.jpg'
import { color } from '@mui/system';
import colors from '../../colors';
import FooterContainer from '../footer/FooterContainer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavigationBar from '../NavigationBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const { isMobileSize, isTabletSize } = useDeviceWidth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate()


    const userToken = localStorage.getItem('loginTokenDanfeConsultancy')
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    // Login
    const loginUser = (data: any) => {
        const user = {
            email, password
        }

        // code for showing toast
        if (sessionStorage.getItem("showmsg") == '1') {
            toast.success("User Registered");
            sessionStorage.removeItem("showmsg");
        }

        axios.post("http://localhost:4000/api/users/login", data).then((res => {
            console.log(res.data)
            localStorage.setItem("loginTokenDanfeConsultancy", res.data.token);
            localStorage.setItem("userID", res.data._id);
            setEmail("");
            setPassword("");
            if (res.data.isAdmin === "true") {
                navigate('/admin/event')
            } else {
                navigate('/')
            }


        })).catch(error => {
            toast.error("Email or password incorrect");
        })
    }

    // Get user data
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            await axios.get("http://localhost:4000/api/users/personaldetails", {
                headers: headers,
            }).then((res) => {
                setFirstName(res.data.firstName);
                console.log("Name boleto", res.data.firstName)
                setLastName(res.data.lastName);
            })
        }


        fetchData();
    }, [])

    const logout = () => {
        localStorage.removeItem('loginTokenDanfeConsultancy');
        localStorage.removeItem('userID');
        window.location.href = '/'
    }
    // Formik validation
    const initialValues = {
        email,
        password,

    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Must be a valid email")
            .required("Required*"),
        password: Yup.string().min(8, "Password must be atleat 8 character").max(20).required("Required*"),

    });

    return (
        <>
            <NavigationBar />
            <Box className="registerMainContainer" sx={{ backgroundColor: '', width: '100%', height: '88.8vh', padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 13rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {userToken ?
                    <>
                        <Box sx={{ backgroundColor: '' }}>
                            <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '25px', fontWeight: 'light' }}>You are currently logged in as <span style={{ fontWeight: 'bold' }}>{firstName} {lastName}</span></Typography>
                            <Typography sx={{ textAlign: 'center', marginTop: '15px', fontFamily: '"Poppins", sans-serif', color: 'gray' }}><a href="/" style={{ textDecoration: 'none' }}><Button sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: 'white', backgroundColor: colors.primary, border: `1px solid ${colors.primary}`, textTransform: 'capitalize', '&:hover': { color: colors.primary, backgroundColor: 'white' } }}>Continue as {firstName}</Button></a> &nbsp; or&nbsp; <Button sx={{ fontSize: '16px', fontFamily: '"Poppins", sans-serif', color: 'white', backgroundColor: '#1b1b1b', border: `1px solid #1b1b1b`, textTransform: 'capitalize', '&:hover': { color: '#1b1b1b', backgroundColor: 'white' } }} onClick={logout}>Logout</Button></Typography>
                        </Box>
                    </>
                    :
                    <>
                        <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
                            <Typography sx={{ fontSize: '40px', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px' }}>Login</Typography>
                            <Box sx={{ backgroundColor: 'white', width: 'fit-content', display: 'flex', flexDirection: 'column', borderRadius: '10px', boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff', padding: '30px' }}>

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
                                                onSubmit={loginUser}
                                                validationSchema={validationSchema}
                                            >
                                                <Form style={{ backgroundColor: '', width: '100%', height: '100%' }}>
                                                    <Grid container sx={{ backgroundColor: '', height: '100%', justifyContent: 'center', alignItems: 'center', rowGap: '30px' }}>


                                                        <Grid item xs={12} sm={12} sx={{ position: 'relative', backgroundColor: '', }}>
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

                                                        <Grid item xs={12} sm={12}>
                                                            <Field
                                                                type="submit"
                                                                autoComplete="off"
                                                                id="register"
                                                                name="register"
                                                                style={{ width: '100%', height: '50px', borderRadius: '10px', outline: 'none', border: 'none', backgroundColor: colors.primary, color: 'white', fontSize: '18px', fontFamily: '"Poppins", sans-serif', letterSpacing: '0.5px' }}
                                                                value="Login"
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

                    </>
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
            </Box >

        </>
    )
}

export default Login