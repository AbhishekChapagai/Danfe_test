import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StudentFeedbackCard from './StudentFeedbackCard';
import studentFeedbacks from '../../../data/studentFeedbacks';
import colors from '../../../colors';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../../index.css';
import s from '../../../data/studentFeedbacks'
import axios from 'axios';


const StudentFeedbackContainer = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();

  const [feedBack, setFeedBack] = useState<any>([])

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchFeedback = async () => {
      await axios.get("http://localhost:4000/api/users/allstudentfeedback",).then((res) => {
        setFeedBack(res.data);
        console.log("hello", res.data)
      })
    }
    fetchFeedback()
  }, [])

  // Settings for slider
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  }

  return (
    <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', backgroundColor: '', overflow: 'hidden' }}>
      <Typography
        variant="h4"
        marginBottom={'3rem'}
        sx={{
          width: '100%',
          color: '#252525',
          textAlign: 'center',
          fontWeight: '900',
          letterSpacing: '1px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: '"Poppins", sans-serif',
          textTransform: 'capitalize',
        }}
        className="typographyHeading"
        data-aos="zoom-in"
      >
        Student Feedbacks
      </Typography>

      <Box
        sx={{}}
        id="card"
      >
        <Slider {...settings}>
          {feedBack && feedBack.allFeedbacks && feedBack.allFeedbacks.filter((d: any) => d.showInHomePage === true).map((value: any, index: any) => (
            < StudentFeedbackCard
            key = { index }
            name = { value.fullname }
            review = { value.feedback }
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default StudentFeedbackContainer;
