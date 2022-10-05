import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Form from './Form';
import Posts from './Posts/Posts';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MyGrid = () => {
  return (
    <Box sx={{ flexGrow: 'lg' }}>
          <Item><Posts /></Item>

    </Box>
  );
}

export default MyGrid;
