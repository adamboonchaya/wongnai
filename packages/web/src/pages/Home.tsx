import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Card
        sx={{
          width: '100%',
          backgroundColor: 'primary.light',
          mb: 2,
        }}
      >
        <Typography variant="h6">Welcome to the Home Page</Typography>
      </Card>

      <Button component={Link} to="/EkkamaiMacchiato" variant="contained" color="primary">
        Go to Ekkamai Macchiato
      </Button>

      <br />

      <Button component={Link} to="/RaanLumKiew" variant="contained" color="primary">
        Go to Raan Lum Kiew
      </Button>
    </div>
  );
};

export default Home;
