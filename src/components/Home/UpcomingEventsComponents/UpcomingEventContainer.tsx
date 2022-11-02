import { Box, Stack, Typography } from '@mui/material';
import colors from '../../../colors';
import UpcomingEventCard from './UpcomingEventCard';
import upcomingEvent from '../../../data/upcomingEvent';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import s from '../../../data/upcomingEvent'
import '../../../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



const UpcomingEventContainer = () => {
  const { isMobileSize, isTabletSize } = useDeviceWidth();
  const [event, setEvent] = useState<any>([])

  const headers = {
    Authorization: `Bearer ${localStorage.getItem('loginTokenDanfeConsultancy')}`,
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      await axios.get("http://localhost:4000/api/users/upcomingevents", {
        headers: headers,
      }).then((res) => {
        setEvent(res.data);
        console.log("Upcomming", res.data)
      })
    }
    fetchData()
  }, [])


  // Settings for slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '2rem 7rem', overflow: 'hidden' }}>
      <Typography
        variant={isMobileSize ? 'h6' : 'h4'}
        marginBottom={4}
        color={colors.primary}
        fontWeight="bold"
        textAlign={'center'}
        sx={{
          width: '100%',
          color: '#252525',
          textAlign: 'center',
          fontWeight: '900',
          letterSpacing: '2px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
          fontFamily: '"Poppins", sans-serif',
          textTransform: 'capitalize',
        }}
        data-aos="zoom-in"
      >
        Upcoming Events
      </Typography>

      <Box id="card">
        <Slider {...settings}>
          {event && event.upcomingEvents && event.upcomingEvents.map((value: any, index: any) => (
            <UpcomingEventCard
              key={index}
              title={value.name}
              description={value.description}
              time={value.time}
              learnMore={'/admin/event/' + value._id}
            />
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default UpcomingEventContainer;
