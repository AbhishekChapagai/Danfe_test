import { Button, TableContainer, TableHead, Typography, Table, TableCell, TableBody, Paper } from '@mui/material'
import NavigationBar from '../NavigationBar'
import { Box, Stack } from '@mui/system'
import img from '../../images/why.jpg'
import React, { useEffect } from 'react'
import useDeviceWidth from '../hooks/useDeviceWidth'
import colors from '../../colors'
import { Link } from 'react-router-dom'
import FooterContainer from '../footer/FooterContainer'

const WhyStudyUK = () => {
    const { isMobileSize, isTabletSize } = useDeviceWidth();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavigationBar />
            <Box>
                <Box sx={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', }}>
                    <Stack sx={{ width: '100%', height: '50vh', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                        {/* <img src={img} alt="graduation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
                        <Stack className="whyUK" sx={{ width: '100%', height: '100%' }}></Stack>
                    </Stack>
                    <Stack sx={{ position: 'absolute', zIndex: '1', left: '225px', width: '40%', backgroundColor: '' }}>
                        <Typography sx={{ color: 'white', fontFamily: '"Poppins", sans-serif', fontSize: '70px', fontWeight: 'bold' }}>Why Study UK?</Typography>
                        <Typography sx={{ color: 'gray', fontFamily: '"Poppins", sans-serif', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.5px' }}>UNITED KINGDOM</Typography>
                    </Stack>
                    <Stack sx={{ position: 'absolute', zIndex: '1', right: '300px', width: '15%' }}>
                        <Link to="/studentapplication" style={{ textDecoration: 'none' }}><Button sx={{ color: 'white', borderRadius: '30px', border: '1px solid white', fontFamily: '"Poppins", sans-serif', fontSize: '15px', '&: hover ': { backgroundColor: 'white', color: 'black' }, textTransform: 'capitalize', letterSpacing: '0.8px' }}>
                            Send Application
                        </Button></Link>
                    </Stack>
                </Box>

                <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '4rem 7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    {/* Paragrah section */}
                    <Box sx={{ padding: isMobileSize ? '4rem 1rem' : isTabletSize ? '4rem 3.5rem' : '2rem 7rem' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Study In UK</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            With four universities ranking in the top ten according to the QS World University Rankings 2022, there is no doubt that the UK is an ideal study destination for international students.<br />
                            Studying in the UK is an excellent investment if you're looking to further your education and improve your employability. A degree from a prestigious UK institution will provide you with a valuable and transformative experience that will take your education to the next level. If you are still not convinced, read on to find out what the UK has to offer you.
                        </Typography>
                        <Link to="/university" style={{ textDecoration: 'none' }}><Button sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', textTransform: 'capitalize', backgroundColor: colors.primary, borderRadius: '10px', marginTop: '15px', color: 'white', width: '15%', '&: hover ': { backgroundColor: colors.secondary, color: 'white' } }} > View Universities</Button></Link>
                    </Box>

                    {/* Paragrah two */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Education System</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            Education systems in the UK vary depending on the jurisdiction, with England, Northern Ireland, Wales and Scotland having different laws and regulations. The biggest differences are seen in general and secondary education, where each region has its own credit frameworks and qualifications. <br />
                            Several types of institutions offer higher education in the UK, including specialized schools, colleges, and universities. These institutions offer various types of degrees, such as bachelor's degrees (undergraduate degrees), Master's, and doctoral degrees (postgraduate degrees).
                        </Typography>

                    </Box>
                    {/* Paragrah two */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Benefits of Studying in the UK for International Students</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px', padding: '0.5rem 1.8rem' }}>
                            <ul style={{ lineHeight: '25px' }}>
                                <li>The UK offers one of the best higher education experiences in the world as they are home to top-ranking universities and research institutes.</li>
                                <li>You can do various specializations that are not easily available in other countries based on your choice. </li>
                                <li>As an international student, you can apply for scholarships to fund your studies or take up part-time jobs for up to 20 hours during your term to cover your expenses. </li>
                                <li>The courses in the UK start in January, and you can complete your courses faster as the UK education system is comparatively shorter than the ones in other countries.</li>
                                <li>Thanks to the new post-study work visa announced by the UK government, you can stay and work for two years after graduation.</li>
                            </ul>
                        </Typography>

                    </Box>
                    {/* Paragrah two */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Courses</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            The United Kingdom is the perfect place to study abroad if you're looking for a top-notch education. With world-renowned universities and a diverse range of courses, you'll surely find what you're looking for. By choosing to study one of the best courses in the UK, you'll be setting yourself up for success in your future career. The UK offers you a sea of options, and below, we have mentioned a few popular courses among international students.
                        </Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px', padding: '0.5rem 1.8rem' }}>
                            <ul style={{ lineHeight: '25px' }}>
                                <li>Business Studies</li>
                                <li>Finance and Accounting  </li>
                                <li>Economics</li>
                                <li>Art and Design </li>
                                <li>Computer Science </li>
                                <li>Data Science</li>
                                <li>Engineering  </li>
                                <li>Medicine  </li>
                            </ul>
                        </Typography>

                    </Box>
                    {/* Paragraph three */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>

                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Scholarships for International Students in the UK</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            As you calculate your study and living costs for studying in the UK, you may realize that it is a bit expensive. However, different funding options are available to international students who want to learn in the UK. The possibilities can range from partial funding, like paying for part of your tuition, to full funding, which would cover your program fees and living expenses.<br />
                            Depending on your specific circumstances, there are plenty of ways to finance your studies abroad. While most of these scholarships are for postgraduate students and focus on research courses, there are also a fair number of scholarships available for undergraduates. The university itself generally offers these scholarships.
                        </Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            Some of the government-funded scholarships include:</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px', padding: '0.5rem 1.8rem' }}>
                            <ul style={{ lineHeight: '25px' }}>
                                <li>Edinburgh Global Research Scholarships in UK</li>
                                <li>Gates Cambridge Scholarships in UK</li>
                                <li>Denys Holland Scholarship at University College London</li>
                                <li>Bristol University International Office Scholarships</li>
                            </ul>
                        </Typography>

                    </Box>
                    {/* Paragraph four */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>

                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Cost of Studying in the UK</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            Studying in the UK can be expensive, so you must plan your finances in advance. However, the undergraduate degrees only take
                            three years to complete instead of four years and the Master's degree also only takes one year instead of two. This can lead to big savings in living expenses and school fees for a year. Here is an approximate budget for the various study levels you can do in the UK.
                        </Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            Some of the government-funded scholarships include:</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '20px' }}>
                            <TableContainer sx={{ border: '1px solid #d0d0d0', borderRadius: '10px', width: '400px' }}>
                                <Table sx={{}} aria-label="simple table">
                                    <TableHead sx={{}}>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Courses</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>Approx. Cost per Year</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Foundation degree </TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£20,000-28,000</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Diploma </TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£10,000-38,000</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Undergraduate degree</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£10,000-30,000</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Postgraduate degree</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>
                                            £10,000-20,000</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Doctorate</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£15,000-30,000</TableCell>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>

                    </Box>
                    {/* Paragraph five */}
                    <Box sx={{ padding: isMobileSize ? '0rem 1rem' : isTabletSize ? '0rem 3.5rem' : '2rem 7rem' }}>

                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: '600', fontSize: '30px', letterSpacing: '1px' }}>Cost of Studying and Living in the UK</Typography>
                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '5px' }}>
                            The cost of living will vary depending on the city you reside in the UK and your personal lifestyle. Other factors like your choice of university, course type, accommodation, and such must also be considered while planning your budget. You can take up part-time employment as an international student to help cover your daily living expenses. Take a look at this table to get an approximate idea of the costs you will have to cover while studying in the UK. </Typography>

                        <Typography sx={{ fontFamily: '"Poppins", sans-serif', fontWeight: 'normal', fontSize: '13px', letterSpacing: '1px', marginTop: '20px' }}>
                            <TableContainer sx={{ border: '1px solid #d0d0d0', borderRadius: '10px', width: '450px' }}>
                                <Table sx={{}} aria-label="simple table">
                                    <TableHead sx={{}}>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Expenses to live in the UK</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px' }}>Approx. Cost per Month</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Rent </TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>
                                            £400-500</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Food </TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£200-250</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Electricity and Gas</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£60-80</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Internet</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>
                                            £30-40</TableCell>
                                    </TableBody>
                                    <TableBody>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px', borderRight: '1px solid #d0d0d0' }}>Travel</TableCell>
                                        <TableCell sx={{ fontFamily: '"Poppins", sans-serif', fontSize: '13px', fontWeight: 'normal', letterSpacing: '1px' }}>£80-90</TableCell>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>

                    </Box>
                </Box>
            </Box>
            <FooterContainer />
        </>
    )
}

export default WhyStudyUK