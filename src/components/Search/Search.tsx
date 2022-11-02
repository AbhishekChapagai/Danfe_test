import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material';
import useDeviceWidth from '../hooks/useDeviceWidth';
import colors from '../../colors';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {

    const [v, setV] = useState<any>();
    const [searchValue, setSearchValue] = useState<any>([])
    const { isMobileSize, isTabletSize, isDesktopSize } = useDeviceWidth();

    const search = (value: any) => {

        axios.post("http://localhost:4000/api/users/searchuni", {
            universityName: value
        }).then((res) => {

            setSearchValue(res.data)
            console.log("university name", res.data)
        })
    }

    useEffect(() => {
        search(v);
    }, [v])


    return (
        <Box sx={{ padding: isMobileSize ? '0.3rem 1rem' : isTabletSize ? '0.5rem 3.8rem' : '2rem 10rem', width: '100%', backgroundColor: 'white', position: 'absolute', top: '0', bottom: '0', zIndex: '1100', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', rowGap: '20px', textAlign: 'left' }}>
            <Box sx={{ width: '80%' }}>
                <Typography sx={{ width: 'fit-content', padding: '10px', fontFamily: '"Poppins", sans-serif', '&:hover': { color: colors.primary }, fontSize: '14px' }}><span style={{ fontSize: '13px' }}><i className="fas fa-long-arrow-alt-left"></i></span> Go Back</Typography>
            </Box>
            <input type="text" placeholder="Search University" value={v} onChange={(e: any) => { setV(e.target.value) }} style={{ width: '80%', padding: '20px', outline: 'none', borderRadius: '10px', border: '1px solid #d0d0d0', fontFamily: '"Poppins", sans-serif', fontSize: '16px', boxShadow: ' 0px 3px 10px 0px rgba(72,72,72,0.2)' }} />
            {v ? <Box sx={{ backgroundColor: '', width: '80%', maxHeight: '300px', borderRadius: '10px', boxShadow: ' 0px 3px 10px 0px rgba(72,72,72,0.2)', display: 'flex', flexDirection: 'column', rowGap: '10px', overflowY: 'scroll', overflowX: 'hidden' }}>
                {
                    searchValue && searchValue.universities && searchValue.universities.map((value: any) => {
                        return (
                            <>
                                <Box className='searchResult' sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: 'gray' }}>{value.universityName}</Typography>
                                    <Link to={'/university/' + value._id} style={{ textDecoration: 'none' }}><Typography sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '11px', color: 'black', letterSpacing: '0.5px', cursor: 'pointer', '&:hover': { color: colors.primary } }}>View Details <i className="fas fa-long-arrow-alt-right"></i></Typography></Link>
                                </Box>
                            </>
                        )
                    })
                }
            </Box> : null
            }
        </Box >
    )
}

export default Search