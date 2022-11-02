import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, List, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useDeviceWidth from '../hooks/useDeviceWidth';
import CustomListItem from './CustomListItem';


type config = {
    fontSize: string;
    marginRight: string;
};

interface Props {
    config: config;
}
const FooterExtras = ({ config }: Props) => {
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

    return (
        <Box sx={{ width: '100%', backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'space-evenly', flexDirection: isMobileSize ? 'column' : isTabletSize ? 'column' : 'row' }}>
            <Typography
                variant="body1"
                sx={{
                    fontSize: isMobileSize ? '25px' : isTabletSize ? '1rem' : isDesktopSize ? '1rem' : '1rem',
                    textAlign: 'start',
                    padding: '1rem'
                }}
            >
                <Link to="/university" style={{ textDecoration: 'none', color: 'black' }}><span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>MSc</span>&nbsp;|&nbsp;<span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>MBA</span>&nbsp;|&nbsp;<span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>BSc</span>&nbsp;|&nbsp;<span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>BIM</span></Link>
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: isMobileSize ? '25px' : isTabletSize ? '1rem' : isDesktopSize ? '1rem' : '1rem',
                    textAlign: 'start',
                    padding: '1rem'
                }}
            >
                <Link to="/studentapplication" style={{ textDecoration: 'none', color: 'black' }}><span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>PTE</span></Link>&nbsp;|&nbsp;<Link to="/studentapplication" style={{ textDecoration: 'none', color: 'black' }}><span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>IELTS</span></Link>&nbsp;|&nbsp;<Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>Interview Preparation</span></Link>&nbsp;|&nbsp;<Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><span style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px' }}>Documentation Guide</span></Link>
            </Typography>
        </Box>
    )
}

export default FooterExtras