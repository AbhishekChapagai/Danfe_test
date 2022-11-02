import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, List, Typography } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';
import CustomListItem from './CustomListItem';


type config = {
    fontSize: string;
    marginRight: string;
};

interface Props {
    config: config;
}
const ChitwanOfficeFooterComponent = ({ config }: Props) => {
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
                Chitwan
            </Typography>
            <List sx={{ backgroundColor: '', alignItems: 'flex-start' }}>
                <CustomListItem

                    icon={<LocationOnIcon sx={{ ...config }} />}
                    text={'East West HighwayLions Chowk (In Front of Shubha Petrol Pump), Narayangarh,Chitwan, Nepal'}
                />

                <CustomListItem
                    icon={<PhoneIcon sx={config} />}
                    text={'+977 56570824 / +977-9862546787'}
                />

            </List>
        </Box>
    )
}

export default ChitwanOfficeFooterComponent