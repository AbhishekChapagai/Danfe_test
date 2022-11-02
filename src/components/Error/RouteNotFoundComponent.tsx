import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const RouteNotFoundComponent = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        maxHeight: '100vh',
        backgroundColor: 'rgba(252, 3, 7, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="column"
        rowGap={3}
        sx={{
          padding: '1rem 2rem',
          backgroundColor: 'rgba(252, 3, 7, 0.4)',
          borderRadius: '1rem',
        }}
      >
        <Typography variant="h4" color="#FFF">
          Route Not Found | 404
        </Typography>
        <Link
          to="/"
          className="routeNotFound"
          style={{
            textDecoration: 'none',
            color: 'rgba(252, 3, 7, 0.8)',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: '1.2rem',
          }}
        >
          Go Back To Home Page
        </Link>
      </Stack>
    </Box>
  );
};

export default RouteNotFoundComponent;
