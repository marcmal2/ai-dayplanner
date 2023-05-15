import { Container } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const Front = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              textAlign="center"
              sx={{ flexGrow: 1 }}
            >
              AI POWERED DAY PLANNER
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box m={2} pt={3} textAlign="center">
        <TextField
          id="outlined-basic"
          Align="center"
          label="Outlined"
          variant="outlined"
        />
        <Button variant="contained">Send</Button>
      </Box>
    </>
  );
};

export default Front;
