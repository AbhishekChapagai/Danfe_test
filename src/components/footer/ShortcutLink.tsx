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
const ShortcutLink = ({ config }: Props) => {
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

    return (
        <Box sx={{ width: '320px', height: '250px', backgroundColor: '' }}>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: '600',
                    fontSize: isMobileSize ? '25px' : isTabletSize ? '1rem' : isDesktopSize ? '1rem' : '1rem',
                    textAlign: 'start',
                    padding: '1rem'
                }}
            >
                Links
            </Typography>
            <List sx={{ backgroundColor: '', alignItems: 'flex-start' }}>
                <Link to="/service" style={{ textDecoration: 'none', color: 'black' }}><CustomListItem

                    icon={""}
                    text={'Services'}
                /></Link>

                <Link to="/studentapplication" style={{ textDecoration: 'none', color: 'black' }}><CustomListItem
                    icon={""}
                    text={'Apply Now'}
                /></Link>

                <Link to="/university" style={{ textDecoration: 'none', color: 'black' }}><CustomListItem
                    icon={""}
                    text={'University'}
                /></Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}><CustomListItem
                    icon={""}
                    text={'About Us'}
                /></Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}><CustomListItem
                    icon={""}
                    text={'Contact Us'}
                /></Link>
            </List>
        </Box>
    );
}

export default ShortcutLink