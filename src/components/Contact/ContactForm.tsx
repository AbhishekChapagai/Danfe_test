import { Grid, TextField, Box } from '@mui/material';
import colors from '../../colors';
import CustomButton from '../Custom/CustomButton';
import useDeviceWidth from '../hooks/useDeviceWidth';
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Data for english test


const ContactForm = () => {
  const { isDesktopSize, isTabletSize, isMobileSize } = useDeviceWidth();
  // Form data state
  const [fullName, setFirstName] = useState("")
  const [email, setLastName] = useState("")
  const [contactNumber, setEmail] = useState("")
  const [anyQuestions, setPassword] = useState("")
  const [countryQuery, setConfirmPassword] = useState("")
  const [subjectQuery, setContactNumber] = useState("")

  let config = {
    textAreaHeight: isMobileSize ? '94px' : '200px',
    width: '95%',
  };


  const initialValues = {
    fullName,
    email,
    contactNumber,
    anyQuestions,
    countryQuery,
    subjectQuery,
  };
  // Post data
  const sendData = (data: any) => {

    axios.post("http://localhost:4000/api/users/request", data).then((res) => {
      toast.success("Request Sent");

    }).catch((error) => {
      toast.error("Unable to send request");
    })
  }

  return (
    <>
      <Box sx={{ backgroundColor: '', width: isTabletSize ? '100%' : '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: isMobileSize ? '0.5rem' : isTabletSize ? '1rem' : '0rem' }}>
        <Formik
          initialValues={initialValues}
          onSubmit={sendData}
        >
          <Form style={{ backgroundColor: '' }}>
            <Grid
              container
              // rowSpacing={5}
              sx={{
                width: '100%',
                borderRadius: '8px',
                rowGap: '25px'
              }}
            >
              {/* Text Fields */}
              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="fullName"
                  name="fullName"
                  placeholder="Fullname"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="email"
                  name="email"
                  placeholder="Email"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Contact Number"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="countryQuery"
                  name="countryQuery"
                  placeholder="Country You Want To Query About"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="subjectQuery"
                  name="subjectQuery"
                  placeholder="Subject You Like To Query About"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Field
                  type="text"
                  autoComplete="off"
                  id="anyQuestions"
                  name="anyQuestions"
                  placeholder="Any Questions"
                  style={{ width: '98%', height: '70px', outline: 'none', fontSize: '14px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: '1px solid gray' }}
                />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: '' }}>
                <Field
                  type="submit"
                  autoComplete="off"
                  id="request"
                  value="Send Request"
                  style={{ width: '99%', height: '60px', outline: 'none', backgroundColor: colors.primary, fontSize: '18px', fontFamily: '"Poppins", sans-serif', padding: '5px', borderRadius: '5px', border: 'none', color: 'white', cursor: 'pointer' }}
                />
              </Grid>
            </Grid>
          </Form>
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
  );
};

export default ContactForm;
