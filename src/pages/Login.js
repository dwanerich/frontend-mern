import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../redux/features/authSlice';
import { TextField, Typography, Avatar, Container } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import { GoogleLogin } from 'react-google-login'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { googleSignIn } from '../redux/api';
import GoogleIcon from '@mui/icons-material/Google';


const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const { loading, error } = useSelector((state) => ({ ...state.auth}))
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log({formValue})
    if ((email && password && googleSuccess)) {
      dispatch(login({ formValue, navigate, toast }))
    }


  }
  const onInputChange = (e) => {
    e.preventDefault()
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  const googleSuccess = (resp) => {
    console.log(resp)

    // const email = resp?.profileObj.email
    // const name = resp?.profileObj.name
    // const token = resp?.profileObj.tokenId
    // const googleId = resp?.profileObj.googleId

    // const result = { email, name, token, googleId}
    // dispatch(googleSignIn({ result, navigate, toast }))
  }

  const googleFailure = (error) => {
    console.log(error)
    toast.error(error)
  }

  return (
    <Container>

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}

      style={{
        margin: 'auto',
        padding: '75px',
        maxWidth: '450px',
        alignItems: 'center',
        marginTop: '125px',
        borderRadius: '6px',
        boxShadow: '0 1px 3px 1px gray',
        textAlign: 'center',
        textDecoration: 'white'
      }}
      noValidate
      autoComplete="off"
      >
        <center>
      <Avatar src="/broken-image.jpg" style={{textAlign: 'center'}} />
        </center>

      <div>
        <div>
        <Button disabled>
        Log in
        </Button>
        </div>

        <TextField required label="Email" type='email' value={email} id="fullWidth"  name='email' variant='outlined' onChange={onInputChange} helperText='Please provide your email' />
        <TextField required label="Password" type='password' value={password} id="outlined-size-normal"  name='password' variant='outlined' onChange={onInputChange} helperText='Please provide your password'/>
      </div>

        <Button onClick={handleSubmit} variant='outlined' style={{alignItems: 'right', marginBottom: 10, marginTop: 10, width: '50%', color: 'black' }}> {loading && (<CircularProgress/>)} LOG IN</Button> <br />
        <GoogleLogin
        clientId='953833515347-7g0stjntk6b31mb7hcjqkvaqjndk7dsl.apps.googleusercontent.com'
        render={(renderProps) => (
          <Button variant='outlined' style={{width: "50%", color: 'black', borderColor: 'gray'}}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}>
            <GoogleIcon /> GOOGLE SIGN IN
          </Button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleFailure}
        cookiePolicy="single_host_origin"
        />

        <div>
        <br />
          <Typography > Don't have an account? <Link to={'/register'}>Sign up</Link>
        </Typography>
        </div>
    </Box>
    </Container>


  )
}

export default Login;
