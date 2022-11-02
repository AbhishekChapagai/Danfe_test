import React, { useEffect, useState } from 'react'
import { Box, Typography, Stack, Grid, TextField, FormGroup, FormControlLabel, Checkbox, Tooltip, TextareaAutosize, Button } from '@mui/material';
import useDeviceWidth from '../../hooks/useDeviceWidth';
import colors from '../../../colors';
import { Dispatch, SetStateAction } from "react";



const StudentFeedbackPage = () => {
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();


    let config = {
        width: isDesktopSize ? '98%' : '98%',
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <></>
    )
}

export default StudentFeedbackPage