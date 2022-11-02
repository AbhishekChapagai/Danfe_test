import img from '../../images/mission.jpg';
import TextImageBox from '../ServiceComponent/CommonServiceComponent/TextImageBox';
import MissionList from './MissionList';
import { Box, Typography } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';


const Missions = () => {

  const { isMobileSize, isTabletSize } = useDeviceWidth();


  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: '', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '30px', marginTop: '100px', marginBottom: '50px', flexDirection: 'row-reverse' }}>
        {!isMobileSize && <Box sx={{ width: '50%', height: `${isTabletSize ? '40vh' : '50vh'}`, borderRadius: '2px' }}>
          <img src={img} style={{ height: '100%', width: '100%', borderRadius: '2px', objectFit: 'cover' }} />
        </Box>}
        <Box sx={{ width: `${isMobileSize ? '95%' : '50%'}`, padding: '20px' }}>
          <Typography sx={{ fontSize: `${isMobileSize ? '25px' : '40px'}`, fontFamily: '"Inter", sans-serif', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
            Our Mission
          </Typography>
          <Typography sx={{ textAlign: 'justify' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            nemo. Cupiditate eligendi delectus consectetur quisquam amet eaque ab
            officia, placeat blanditiis quos aperiam necessitatibus excepturi ex
            assumenda porro facilis error!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
            nemo. Cupiditate eligendi delectus consectetur quisquam amet eaque ab
            officia, placeat blanditiis quos aperiam necessitatibus excepturi ex
            assumenda porro facilis error!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Missions;
