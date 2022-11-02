import React, { useEffect, useState } from 'react'
import Sidebar from '../components/SidebarComponents/Sidebar'
import { Box, Typography, Button } from '@mui/material'
import axios from 'axios'
import colors from '../../colors'

const AdminStudentApplication = () => {

  const [application, setApplication] = useState<any>([])
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  // Get Event
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchEvent = async () => {
      await axios.get("http://localhost:4000/api/admin/studentapplication", {
        headers: headers,
      }).then((res) => {
        setApplication(res.data)
        console.log(res.data)
      })
    }

    fetchEvent();
  }, [])
  return (
    <>
      <Sidebar />
      <Box className='registerMainContainer' sx={{ marginLeft: '250px', padding: '1.5rem', height: '100vh' }}>
        {/* Feedback Section */}
        <Box sx={{ backgroundColor: 'white', padding: '1rem', boxShadow: '10px 10px 50px #d9d9d9, -10px -10px 50px #ffffff', borderRadius: '10px' }}>
          <Typography sx={{ fontSize: '20px', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>Call Request</Typography>
          {/* map feedback*/}
          {
            application && application.data && application.data.map((values: any, index: any) => (
              <Box key={index} sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', columnGap: '10px', rowGap: '10px', flexDirection: 'column' }}>
                <Box sx={{ marginTop: '10px', border: '1px solid gray', width: '100%', padding: '0.5rem', borderRadius: '10px' }}>
                  <Box sx={{ marginTop: '10px', display: 'grid', gridTemplateColumns: 'auto auto auto auto', rowGap: '10px' }}>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>First Name : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.firstName}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Middle Name : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.middleName}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Last Name : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.lastName}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Email : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.email}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Contact Number : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.contactNumber}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Gender : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.gender}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>DOB : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.dateOfBirth}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Citizenship Number : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.citizenShipNumber}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Passport Number : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.passportNumber}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Country : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.temporaryCorrespondenceCountry}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Correspondence Address : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.temporaryCorrespondenceAddress}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Postal/Zip Code : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.temporaryCorrespondencePostalCode}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Country : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.permanentCorrespondenceCountry}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Permanent Address : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.permanentCorrespondenceAddress}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Postal/Zip Code : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.permanentCorrespondencePostalCode}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Name of Institution : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.nameOfInstitution}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Course of Study : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.courseOfStudy}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Start Date : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.startDate}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>End Date : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.endDate}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Grade in Percentage : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.gradeIngrade}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Grade in Grade : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.englishQualification}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>English Qualification : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.score}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Score : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.attemptedDate}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Attempted Year : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.interestedCountry}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Country : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.interestedUniversity}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>University : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.interestedCourse}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Course Title : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.educationLevel}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Education Level : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.monthYearOfEntry}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Month/Year of Intake : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.personalStatement}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Personal Statement : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.hearAboutUs}</span></Typography>
                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px' }}>Hear About Us : <span style={{ color: 'gray', fontSize: '13px', fontFamily: '"Poppins", sans-serif' }}>{values.middleName}</span></Typography>
                  </Box>
                  <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: 'auto auto auto auto', marginTop: '20px', columnGap: '10px', rowGap: '10px' }}>
                    <a href={`http://localhost:4000/${application.data[index].passport}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Passport</button></a>
                    <a href={`http://localhost:4000/${application.data[index].citizenship}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Citizenship</button></a>
                    <a href={`http://localhost:4000/${application.data[index].letterOfRecommendation}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Letter of Recomendation</button></a>
                    <a href={`http://localhost:4000/${application.data[index].lastAcademicCert}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Last Academic Degree Certificate</button></a>
                    <a href={`http://localhost:4000/${application.data[index].experienceLetter}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Experience Letter If You Have</button></a>
                    <a href={`http://localhost:4000/${application.data[index].experienceLetter}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>Final Degree Marksheet</button></a>
                    <a href={`http://localhost:4000/${application.data[index].passport}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>IELTS/PTE/OAT If You Have</button></a>
                    <a href={`http://localhost:4000/${application.data[index].englishResult}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>All Other Academics In One PDF</button></a>
                    <a href={`http://localhost:4000/${application.data[index].cv}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>CV in MS Word</button></a>
                    <a href={`http://localhost:4000/${application.data[index].sop}`} target="blank"><button style={{ padding: '5px', width: '100%', border: 'none', fontSize: '15px', fontFamily: '"Poppins", sans-serif', borderRadius: '5px', backgroundColor: colors.primary, color: 'white' }}>SOP in MS Words</button></a>
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

export default AdminStudentApplication