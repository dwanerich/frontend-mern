// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Form = () => {


  return (

    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' }
    }}
    noValidate
    autoComplete="off"
    >
      <Typography>Toe Tag</Typography>
      <TextField id="standard-basic" label="Name" variant="standard" /> <br />
      <TextField id="standard-basic" label="Memory" variant="standard"/> <br />
      <TextField id="standard-basic" label="Selected File" variant="standard" /> <br />
      <Button variant="outlined">Send</Button>

    </Box>
  );
}

export default Form;
