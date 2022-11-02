import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Stack, Grid, TextField, FormGroup, FormControlLabel, Checkbox, Tooltip, TextareaAutosize, Button } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';
import colors from '../../colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from '../NavigationBar';



const StudentApplication = () => {

    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();
    const [openAcademicsAdd, setOpenAcademicsAdd] = useState<boolean>(false);
    const [id, setUserID] = useState()
    const formDataObj: any = {};

    const feedbackRef = useRef();
    const navigate = useNavigate();

    let config = {
        width: isDesktopSize ? '98%' : '98%',
    };

    // To close modal when clicking in a certain div
    const closeModal = (e: React.MouseEvent<HTMLInputElement>) => {
        if (feedbackRef.current === e.target) {
            setOpenAcademicsAdd(false)
        }
    }

    // To post student application
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
    }

    const addStudentApplication = (formData: FormData) => {

        axios.post("http://localhost:4000/api/studentapplication", formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
            },
        }).then((res) => {
            toast.success("Application Sent");

        }).catch((error) => {
            toast.error("Application not sent")
            toast.error("Please fill the form correctly")
            console.log(error.error)
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>
            <NavigationBar />
            <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', }}>
                <Formik
                    initialValues={{
                        firstName: '',
                        middleName: '',
                        lastName: '',
                        email: '',
                        contactNumber: '',
                        gender: '',
                        dateOfBirth: '',
                        citizenShipNumber: '',
                        passportNumber: '',
                        temporaryCorrespondenceCountry: '',
                        temporaryCorrespondenceTown: '',
                        temporaryCorrespondenceAreaOrStreet: '',
                        temporaryCorrespondencePostalCode: '',
                        permanentCorrespondenceCountry: '',
                        permanentCorrespondenceTown: '',
                        permanentCorrespondenceAreaOrStreet: '',
                        permanentCorrespondencePostalCode: '',
                        nameOfInstitution: '',
                        courseOfStudy: '',
                        startDate: '',
                        endDate: '',
                        gradeInPercentage: '',
                        gradeIngrade: '',
                        englishQualification: '',
                        score: '',
                        attemptedDate: '',
                        interestedCountry: '',
                        interestedUniversity: '',
                        interestedCourse: '',
                        educationLevel: '',
                        monthYearOfEntry: '',
                        personalStatement: '',
                        hearAboutUs: '',
                        passport: '',
                        lastAcademicCert: '',
                        finalDegreeMarkSheet: '',
                        allOtherAcademicDoc: '',
                        citizenship: '',
                        letterOfRecommendation: '',
                        experienceLetter: '',
                        englishResult: '',
                        cv: '',
                        sop: '',
                        user: `${localStorage.getItem('userID')}`

                    }}
                    onSubmit={(values) => {
                        let formData = new FormData();
                        formData.append("firstName", values.firstName)
                        formData.append("user", values.user)
                        formData.append("middleName", values.middleName)
                        formData.append("lastName", values.lastName)
                        formData.append("email", values.email)
                        formData.append("contactNumber", values.contactNumber)
                        formData.append("gender", values.gender)
                        formData.append("dateOfBirth", values.dateOfBirth)
                        formData.append("citizenShipNumber", values.citizenShipNumber)
                        formData.append("passportNumber", values.passportNumber)
                        formData.append("temporaryCorrespondenceCountry", values.temporaryCorrespondenceCountry)
                        formData.append("temporaryCorrespondenceTown", values.temporaryCorrespondenceTown)
                        formData.append("temporaryCorrespondenceAreaOrStreet", values.temporaryCorrespondenceAreaOrStreet)
                        formData.append("temporaryCorrespondencePostalCode", values.temporaryCorrespondencePostalCode)
                        formData.append("permanentCorrespondenceCountry", values.permanentCorrespondenceCountry)
                        formData.append("permanentCorrespondenceTown", values.permanentCorrespondenceTown)
                        formData.append("permanentCorrespondenceAreaOrStreet", values.permanentCorrespondenceAreaOrStreet)
                        formData.append("permanentCorrespondencePostalCode", values.permanentCorrespondencePostalCode)
                        formData.append("nameOfInstitution", values.nameOfInstitution)
                        formData.append("courseOfStudy", values.courseOfStudy)
                        formData.append("startDate", values.startDate)
                        formData.append("endDate", values.endDate)
                        formData.append("gradeInPercentage", values.gradeInPercentage)
                        formData.append("gradeIngrade", values.gradeIngrade)
                        formData.append("englishQualification", values.englishQualification)
                        formData.append("score", values.score)
                        formData.append("attemptedDate", values.attemptedDate)
                        formData.append("interestedCountry", values.interestedCountry)
                        formData.append("interestedUniversity", values.interestedUniversity)
                        formData.append("interestedCourse", values.interestedCourse)
                        formData.append("educationLevel", values.educationLevel)
                        formData.append("monthYearOfEntry", values.monthYearOfEntry)
                        formData.append("personalStatement", values.personalStatement)
                        formData.append("hearAboutUs", values.hearAboutUs)
                        formData.append("passport", values.passport)
                        formData.append("lastAcademicCert", values.lastAcademicCert)
                        formData.append("finalDegreeMarkSheet", values.finalDegreeMarkSheet)
                        formData.append("allOtherAcademicDoc", values.allOtherAcademicDoc)
                        formData.append("citizenship", values.citizenship)
                        formData.append("letterOfRecommendation", values.letterOfRecommendation)
                        formData.append("experienceLetter", values.experienceLetter)
                        formData.append("englishResult", values.englishResult)
                        formData.append("cv", values.cv)
                        formData.append("sop", values.sop)
                        formData.append("user", values.user)




                        addStudentApplication(formData);
                    }}
                >
                    {({ values, setFieldValue }) => (
                        <Form>
                            <Box sx={{ width: '100%', boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, borderRadius: '8px' }}>
                                <Box sx={{ borderBottom: '0.5px solid #ebebeb', paddingBottom: '10px' }}>
                                    <Typography sx={{ fontSize: '28px', fontFamily: '"Inter", sans-serif', fontWeight: 'bold', color: 'black' }}>Apply For The University You Want</Typography>
                                </Box>
                                <Box sx={{ width: '100%', marginTop: '20px', backgroundColor: '' }}>
                                    <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Personal Details</Typography>

                                    <Grid
                                        container
                                        // rowSpacing={5}
                                        sx={{
                                            // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                            width: '100%',
                                            borderRadius: '8px',
                                            rowGap: '25px',
                                            marginTop: '30px',
                                        }}
                                    >
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>First Name <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="firstName"
                                                name="firstName"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Middle Name</Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="outlined-required"
                                                name="middleName"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Last Name <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                required
                                                id="outlined-required"
                                                name="lastName"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Email <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="email"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Contact Number <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="contactNumber"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Gender <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            {/* <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="gender"
                                            /> */}
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-select-gender"
                                                as="select"
                                                name="gender"
                                            >
                                                <option value="None"></option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Others">Others</option>
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Date of Birth <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                type='text'
                                                name="dateOfBirth"
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Citizenship Number <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="citizenShipNumber"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Passport Number</Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="passportNumber"

                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Temporary District <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-select-gender"
                                                as="select"
                                                name="temporaryCorrespondenceCountry"
                                            >
                                                <option value="None"></option>
                                                <option value="Achham">Achham</option>
                                                <option value="Arghakhanchi">Arghakhanchi</option>
                                                <option value="Baglung">Baglung</option>
                                                <option value="Baitadi">Baitadi</option>
                                                <option value="Bajhang">Bajhang</option>
                                                <option value="Bajura">Bajura</option>
                                                <option value="Banke">Banke</option>
                                                <option value="Bara">Bara</option>
                                                <option value="Bardiya">Bardiya</option>
                                                <option value="Bhaktapur">Bhaktapur</option>
                                                <option value="Bhojpur">Bhojpur</option>
                                                <option value="Chitwan">Chitwan</option>
                                                <option value="Dadeldhura">Dadeldhura</option>
                                                <option value="Dailekh">Dailekh</option>
                                                <option value="Dang Deokhuri">Dang Deokhuri</option>
                                                <option value="Darchula">Darchula</option>
                                                <option value="Dhading">Dhading</option>
                                                <option value="Dhankuta">Dhankuta</option>
                                                <option value="Dhanusa">Dhanusa</option>
                                                <option value="Dolakha">Dolakha</option>
                                                <option value="Dolpa">Dolpa</option>
                                                <option value="Doti">Doti</option>
                                                <option value="Gorkha">Gorkha</option>
                                                <option value="Gulmi">Gulmi</option>
                                                <option value="Humla">Humla</option>
                                                <option value="Ilam">Ilam</option>
                                                <option value="Jajarkot">Jajarkot</option>
                                                <option value="Jhapa">Jhapa</option>
                                                <option value="Jumla">Jumla</option>
                                                <option value="Kailali">Kailali</option>
                                                <option value="Kalikot">Kalikot</option>
                                                <option value="Kanchanpur">Kanchanpur</option>
                                                <option value="Kapilvastu">Kapilvastu</option>
                                                <option value="Kaski">Kaski</option>
                                                <option value="Kathmandu">Kathmandu</option>
                                                <option value="Kavrepalanchok">Kavrepalanchok</option>
                                                <option value="Khotang">Khotang</option>
                                                <option value="Lalitpur">Lalitpur</option>
                                                <option value="Mahottari">Mahottari</option>
                                                <option value="Makwanpur">Makwanpur</option>
                                                <option value="Manang">Manang</option>
                                                <option value="Morang">Morang</option>
                                                <option value="Mugu">Mugu</option>
                                                <option value="Mustang">Mustang</option>
                                                <option value="Myagdi">Myagdi</option>
                                                <option value="Nawalparasi">Nawalparasi</option>
                                                <option value="Nuwakot">Nuwakot</option>
                                                <option value="Okhaldhunga">Okhaldhunga</option>
                                                <option value="Palpa">Palpa</option>
                                                <option value="Panchthar">Panchthar</option>
                                                <option value="Parbat">Parbat</option>
                                                <option value="Parsa">Parsa</option>
                                                <option value="Pyuthan">Pyuthan</option>
                                                <option value="Ramechhap">Ramechhap</option>
                                                <option value="Rasuwa">Rasuwa</option>
                                                <option value="Rautahat">Rautahat</option>
                                                <option value="Rolpa">Rolpa</option>
                                                <option value="Rukum">Rukum</option>
                                                <option value="Rupandehi">Rupandehi</option>
                                                <option value="Salyan">Salyan</option>
                                                <option value="Sankhuwasabha">Sankhuwasabha</option>
                                                <option value="Saptari">Saptari</option>
                                                <option value="Sarlahi">Sarlahi</option>
                                                <option value="Sindhuli">Sindhuli</option>
                                                <option value="Sindhupalchok">Sindhupalchok</option>
                                                <option value="Siraha">Siraha</option>
                                                <option value="Solukhumbu">Solukhumbu</option>
                                                <option value="Sunsari">Sunsari</option>
                                                <option value="Surkhet">Surkhet</option>
                                                <option value="Syangja">Syangja</option>
                                                <option value="Tanahu">Tanahu</option>
                                                <option value="Taplejung">Taplejung</option>
                                                <option value="Terhathum">Terhathum</option>
                                                <option value="Udayapur">Udayapur</option>
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Temporary Address Town <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="temporaryCorrespondenceTown"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Temporary Address Area or Street <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="temporaryCorrespondenceAreaOrStreet"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Postal/Zip Code  <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="temporaryCorrespondencePostalCode"
                                            />
                                        </Grid>
                                        {/* <Grid item xs={12} sm={12} md={12}>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox />} label="Same as Correspondance Address" />
                                            </FormGroup>
                                        </Grid> */}

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Permanent District</Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-select-gender"
                                                as='select'
                                                name="permanentCorrespondenceCountry"
                                            >
                                                <option value="None"></option>
                                                <option value="Achham">Achham</option>
                                                <option value="Arghakhanchi">Arghakhanchi</option>
                                                <option value="Baglung">Baglung</option>
                                                <option value="Baitadi">Baitadi</option>
                                                <option value="Bajhang">Bajhang</option>
                                                <option value="Bajura">Bajura</option>
                                                <option value="Banke">Banke</option>
                                                <option value="Bara">Bara</option>
                                                <option value="Bardiya">Bardiya</option>
                                                <option value="Bhaktapur">Bhaktapur</option>
                                                <option value="Bhojpur">Bhojpur</option>
                                                <option value="Chitwan">Chitwan</option>
                                                <option value="Dadeldhura">Dadeldhura</option>
                                                <option value="Dailekh">Dailekh</option>
                                                <option value="Dang Deokhuri">Dang Deokhuri</option>
                                                <option value="Darchula">Darchula</option>
                                                <option value="Dhading">Dhading</option>
                                                <option value="Dhankuta">Dhankuta</option>
                                                <option value="Dhanusa">Dhanusa</option>
                                                <option value="Dolakha">Dolakha</option>
                                                <option value="Dolpa">Dolpa</option>
                                                <option value="Doti">Doti</option>
                                                <option value="Gorkha">Gorkha</option>
                                                <option value="Gulmi">Gulmi</option>
                                                <option value="Humla">Humla</option>
                                                <option value="Ilam">Ilam</option>
                                                <option value="Jajarkot">Jajarkot</option>
                                                <option value="Jhapa">Jhapa</option>
                                                <option value="Jumla">Jumla</option>
                                                <option value="Kailali">Kailali</option>
                                                <option value="Kalikot">Kalikot</option>
                                                <option value="Kanchanpur">Kanchanpur</option>
                                                <option value="Kapilvastu">Kapilvastu</option>
                                                <option value="Kaski">Kaski</option>
                                                <option value="Kathmandu">Kathmandu</option>
                                                <option value="Kavrepalanchok">Kavrepalanchok</option>
                                                <option value="Khotang">Khotang</option>
                                                <option value="Lalitpur">Lalitpur</option>
                                                <option value="Mahottari">Mahottari</option>
                                                <option value="Makwanpur">Makwanpur</option>
                                                <option value="Manang">Manang</option>
                                                <option value="Morang">Morang</option>
                                                <option value="Mugu">Mugu</option>
                                                <option value="Mustang">Mustang</option>
                                                <option value="Myagdi">Myagdi</option>
                                                <option value="Nawalparasi">Nawalparasi</option>
                                                <option value="Nuwakot">Nuwakot</option>
                                                <option value="Okhaldhunga">Okhaldhunga</option>
                                                <option value="Palpa">Palpa</option>
                                                <option value="Panchthar">Panchthar</option>
                                                <option value="Parbat">Parbat</option>
                                                <option value="Parsa">Parsa</option>
                                                <option value="Pyuthan">Pyuthan</option>
                                                <option value="Ramechhap">Ramechhap</option>
                                                <option value="Rasuwa">Rasuwa</option>
                                                <option value="Rautahat">Rautahat</option>
                                                <option value="Rolpa">Rolpa</option>
                                                <option value="Rukum">Rukum</option>
                                                <option value="Rupandehi">Rupandehi</option>
                                                <option value="Salyan">Salyan</option>
                                                <option value="Sankhuwasabha">Sankhuwasabha</option>
                                                <option value="Saptari">Saptari</option>
                                                <option value="Sarlahi">Sarlahi</option>
                                                <option value="Sindhuli">Sindhuli</option>
                                                <option value="Sindhupalchok">Sindhupalchok</option>
                                                <option value="Siraha">Siraha</option>
                                                <option value="Solukhumbu">Solukhumbu</option>
                                                <option value="Sunsari">Sunsari</option>
                                                <option value="Surkhet">Surkhet</option>
                                                <option value="Syangja">Syangja</option>
                                                <option value="Tanahu">Tanahu</option>
                                                <option value="Taplejung">Taplejung</option>
                                                <option value="Terhathum">Terhathum</option>
                                                <option value="Udayapur">Udayapur</option>
                                            </Field>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Permanent Address Town  <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="permanentCorrespondenceTown"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Permanent Address Area or Street  <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="permanentCorrespondenceAreaOrStreet"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Postal/Zip Code  <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                            <Field
                                                style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                                id="outlined-required"
                                                name="permanentCorrespondencePostalCode"
                                            />
                                        </Grid>

                                    </Grid>

                                </Box>
                            </Box>


                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Academic Details</Typography>
                                {/* <Box sx={{ display: 'flex', columnGap: '20px' }}>
                                    <Tooltip title="Add" onClick={() => setOpenAcademicsAdd(true)}>
                                        <Typography sx={{ width: 'fit-content', color: colors.primary, fontSize: '20px', backgroundColor: '', cursor: 'pointer' }}><i className="fas fa-plus-circle"></i></Typography>
                                    </Tooltip>
                                </Box> */}
                                <Grid
                                    container
                                    sx={{
                                        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                        width: '100%',
                                        borderRadius: '8px',
                                        rowGap: '25px',
                                        marginTop: '30px',
                                    }}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Name of Institution <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '98%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='text'
                                            name="nameOfInstitution"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Course of Study <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '98%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='text'
                                            name="courseOfStudy"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Start Date <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='text'
                                            name="startDate"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>End Date <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='text'
                                            name="endDate"
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={3}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Grade in Percentage <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='number'
                                            name="gradeInPercentage"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Grade in Grade</Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            name="gradeIngrade"
                                            type='number'

                                        />
                                    </Grid>

                                </Grid>
                                {/* Add Academic Details */}
                                {/* {openAcademicsAdd &&
                                    <Box component="form" ref={feedbackRef} onClick={closeModal} sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '3rem 7rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', position: 'fixed', top: '0', left: '0', zIndex: '99' }} >

                                        <Grid
                                            container
                                            // rowSpacing={5}
                                            maxWidth={600}
                                            sx={{
                                                backgroundColor: 'white',
                                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                                width: '100%',
                                                height: '75vh',
                                                borderRadius: '8px',
                                                marginTop: '30px',
                                                padding: '2rem',
                                                position: 'relative'
                                            }}>
                                            <Typography sx={{ textAlign: 'right', position: 'absolute', top: '5px', right: '20px' }}><span style={{ fontSize: '20px', cursor: 'pointer', backgroundColor: '', borderRadius: '100%' }} onClick={() => setOpenAcademicsAdd(false)}><i className="fas fa-times"></i></span></Typography>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Level</Typography>
                                                <Field
                                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                                    required
                                                    id="outlined-required"
                                                    placeholder='High School / Bachelors / Masters'
                                                // value={degree}
                                                // onChange={(e) => setDegree(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Institution Name</Typography>
                                                <Field
                                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                                    required
                                                    id="outlined-required"
                                                    placeholder='Institution Name'
                                                // value={schoolName}
                                                // onChange={(e) => setSchoolName(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Field of Study</Typography>
                                                <Field
                                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                                    required
                                                    id="outlined-required"
                                                    placeholder='Faculty'
                                                // value={fieldOfStudy}
                                                // onChange={(e) => setFieldOfStudy(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>Start Date</Typography>
                                                <Field
                                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                                    required
                                                    id="outlined-required"
                                                    placeholder='Start Date'
                                                // value={startDate}
                                                // onChange={(e) => setStartDate(e.target.value)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '5px', }}>End Date</Typography>
                                                <Field
                                                    sx={{ ...config, fontFamily: '"Poppins", sans-serif', fontSize: '12px !important' }}
                                                    required
                                                    id="outlined-required"
                                                    placeholder='End Date'
                                                // value={endDate}
                                                // onChange={(e) => setEndDate(e.target.value)}
                                                />
                                            </Grid>
                                            <Button type="submit" variant='contained' sx={{ width: '100%', padding: '1rem', backgroundColor: colors.primary, '&:hover': { backgroundColor: colors.secondary }, fontFamily: '"Inter", sans-serif', fontSize: '16px', letterSpacing: '0.6px' }}>Add Academic Details</Button>
                                        </Grid>
                                    </Box>
                                } */}

                            </Box>

                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>English Language Requirement</Typography>
                                <Grid
                                    container
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        rowGap: '25px',
                                        marginTop: '30px',
                                    }}>

                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>English Qualification <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>

                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-select-test"
                                            as="select"
                                            name="englishQualification"
                                        >
                                            <option value=""></option>
                                            <option value="IELTS">IELTS</option>
                                            <option value="PTE">PTE</option>
                                            <option value="GRE">GRE</option>
                                            <option value="TOEFEL">TOEFEL</option>
                                        </Field>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Score <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='number'
                                            name="score"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Attempted Year <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            type='text'
                                            placeholder='Year'
                                            name="attemptedDate"
                                        />
                                    </Grid>

                                </Grid>
                            </Box>



                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Interested Course and University</Typography>
                                <Grid
                                    container
                                    sx={{
                                        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                        width: '100%',
                                        borderRadius: '8px',
                                        rowGap: '25px',
                                        marginTop: '30px',
                                    }}>

                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Country <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '98%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-select-test"
                                            type="text"
                                            name="interestedCountry"
                                        >
                                        </Field>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>University <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '98%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            name="interestedUniversity"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Course Title <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            name="interestedCourse"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Education Level <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-select-test"
                                            type="text"
                                            name="educationLevel"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: '', marginBottom: '10px' }}>Month/Year of Intake <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <Field
                                            style={{ width: '97%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                            id="outlined-required"
                                            name="monthYearOfEntry"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>



                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>Personal Statement</Typography>
                                <Box>
                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '15px', marginTop: '20px' }}>Applicants are required to provide a personal statement in support of your application. Please state your reasons for choosing this course, give details of any relevant experience, your career plans and other relevant supporting information.</Typography>
                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '18px', fontWeight: 'bold', color: 'red', marginTop: '20px', letterSpacing: '0.8px' }}>Please address below points</Typography>
                                    <Box sx={{ marginTop: '20px' }}>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>1. Introduction</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>2. Academic History</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>3. Professional History</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>4. Why the United Kingdom?</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>5. Why that University?</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>6. Why do you choose this course (mention course module)</Typography>
                                        <Typography sx={{ fontFamily: '"Poopins", sans-serif', fontSize: '15px', letterSpacing: '0.8px' }}>7. Career plan (mention the benefits during PSW and job opportunities in the UK if its a placement course)</Typography>
                                    </Box>
                                </Box>

                                <Field
                                    style={{ width: '100%', height: '150px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '12px', border: '1px solid gray', borderRadius: '5px', outline: 'none', marginTop: '10px', display: 'flex' }}
                                    placeholder="Personal Statement"
                                    name="personalStatement"
                                />
                            </Box>



                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '5px' }}>How Did You Hear About Us ?</Typography>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Field
                                        style={{ width: '40%', height: '60px', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                        id="outlined-select-test"
                                        as="select"
                                        name="hearAboutUs"
                                    >
                                        <option value=""></option>
                                        <option value="Agent">Agent</option>
                                        <option value="Search Engine">Search Engine</option>
                                        <option value="Social Media">Social Media</option>
                                        <option value="Others">Other</option>
                                    </Field>
                                </Grid>
                            </Box>



                            <Box sx={{ boxShadow: '5px 5px 20px #d9d9d9, -10px -10px 20px #ffffff', padding: `${isMobileSize ? '1rem' : '3rem'}`, marginTop: '50px', borderRadius: '8px' }}>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'black', textTransform: 'capitalize', marginBottom: '15px' }}>Document Required</Typography>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'red', textTransform: 'capitalize', marginBottom: '5px' }}>Files in pdf (Should be less than or equal to 25mb)</Typography>
                                <Grid
                                    container
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        rowGap: '35px',
                                        marginTop: '30px',
                                    }}>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Passport</Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("passport", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Citizenship <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("citizenship", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Letter of Recomendation</Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("letterOfRecommendation", e.target.files[0]);
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Last Academic Degree Certificate <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("lastAcademicCert", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Experience Letter If You Have</Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("experienceLetter", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>Final Degree Marksheet <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("finalDegreeMarkSheet", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>IELTS/PTE/OAT If You Have</Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("englishResult", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>All Other Academics In One PDF</Typography>
                                        <input
                                            type="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("allOtherAcademicDoc", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Typography sx={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.8px', color: 'red', textTransform: 'capitalize', marginBottom: '5px', marginTop: '25px' }}>Files in MS Word</Typography>
                                <Grid
                                    container
                                    sx={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        rowGap: '35px',
                                        marginTop: '30px',
                                    }}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>CV in MS Word <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <input
                                            type="file"
                                            name="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("cv", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', marginBottom: '8px', fontSize: '14px' }}>SOP in MS Word <span style={{ color: 'red', fontSize: '11px', fontFamily: '"Poppins", sans-serif' }}>Required *</span></Typography>
                                        <input
                                            type="file"
                                            name="file"
                                            style={{ width: '95%', backgroundColor: '#efefef', padding: '10px', borderRadius: '5px', fontFamily: '"Poppins", sans-serif', }}
                                            onChange={(e: any) => {
                                                setFieldValue("sop", e.target.files[0]);

                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>

                            <Grid item xs={12} sm={12} md={4}>

                                <Field
                                    type="submit"
                                    style={{ width: '200px', height: '50px', marginTop: '20px', backgroundColor: colors.primary, cursor: 'pointer', fontFamily: '"Poppins", sans-serif', padding: '5px', fontSize: '16px', border: '1px solid gray', borderRadius: '5px', outline: 'none' }}
                                    id="outlined-required"
                                    value="Send application"
                                />
                            </Grid>
                        </Form>
                    )}

                </Formik>
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
            </Box>

        </>
    )
}

export default StudentApplication