import { Container } from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

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
    </>
  );
};

export default Front;
