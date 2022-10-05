import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { register } from '../redux/features/authSlice';
import { TextField, Typography, Avatar, Container } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';


import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const Register = () => {
  const { loading, error } = useSelector((state) => ({ ...state.auth}))
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, email, password, passwordConfirmation } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirmation) {
      return toast.error('Password not matching')
    }
    if (email && password && firstName && lastName && passwordConfirmation) {
      dispatch(register({ formValue, navigate, toast }))
    }
    console.log({formValue})
  }
  const onInputChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  return (

    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}

      style={{
        margin: 'auto',
        padding: '75px',
        maxWidth: '450px',
        alignItems: 'center',
        marginTop: '75px',
        borderRadius: '6px',
        boxShadow: '0 1px 3px 1px gray',
        textAlign: 'center',
        textDecoration: 'white',
        autoComplete: "off"
    }}>
        <center>
      <Avatar src="/broken-image.jpg" style={{textAlign: 'center'}}></Avatar>
        </center>

      <div>

        <div>

        <Button disabled>
        Sign up
        </Button>
        </div>

        <TextField required label="First name" value={firstName} name='firstName' variant='outlined' onChange={onInputChange}/>
        <TextField required label="Last name" value={lastName}  name='lastName' variant='outlined' onChange={onInputChange} />
        <TextField required label="Email" value={email} name='email' variant='outlined' onChange={onInputChange} />
        <TextField required label="Password" type='password' value={password} name='password' variant='outlined' onChange={onInputChange} />
        <TextField required label="Password Confirmation" type='password' value={passwordConfirmation} name='passwordConfirmation' variant='outlined' onChange={onInputChange} />


      </div>
        <Button onClick={handleSubmit} variant='outlined' style={{alignItems: 'right', marginBottom: 10, marginTop: 10 }}> {loading && (<CircularProgress/>)} SIGN IN</Button>

        <div>
          <Typography > Already have an account? <Link to={'/login'}>Sign in</Link>
        </Typography>
        </div>
    </Box>


  )
}

export default Register;
