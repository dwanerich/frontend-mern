import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../redux/features/authSlice';
import { createSneaker } from '../redux/features/sneakerSlice';
import { TextField, Typography, Container } from '@material-ui/core';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ChipInput from 'material-ui-chip-input';
import FileBase from 'react-file-base64'

const initialState = {
  title: '',
  size: '',
  tags: []
}

const AddEditSneaker = () => {
  const [sneakerData, setSneakerData] = useState(initialState)
  const { title, size, tags } = sneakerData;

  const { error, loading } = useSelector((state) => ({ ...state.sneaker }));
  const { user } = useSelector((state) => ({ ...state.auth }));

  const dispatch = useDispatch();
  const navigate = useNavigate()


  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sneakerData)
    if (title && size) {
      const updatedSneakerData = { ...sneakerData, name: user?.result?.name }
      dispatch(createSneaker({ updatedSneakerData, navigate, toast }))
      handleClear()
    }
  }

  const onInputChange = (e) => {
    const { name, value } = e.target
    setSneakerData( { ...sneakerData, [name]: value})

  }
  const handleAddTag = (tag) => {
    setSneakerData( { ...sneakerData, tags: [...sneakerData.tags, tag]})
  }

  const handleDeleteTag = (deleteTag) => {
    setSneakerData( {
      ...sneakerData,
      tags: sneakerData.tags.filter((tag) => tag !== deleteTag),
    });
  }
  const handleClear = () => {
    setSneakerData({title: '', size: '', tags: [] })
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
    marginTop: '50px',
    borderRadius: '6px',
    boxShadow: '0 1px 3px 1px gray',
    textAlign: 'center',
    textDecoration: 'white'
  }}
  noValidate
  autoComplete="off"
  >

  <div>
    <div>
    <Button disabled>
    Add Sneaker
    </Button>
    </div>

    <TextField label="Enter Title"
    type='text'
    value={title}
    name='title'
    variant='outlined'
    onChange={onInputChange}
    className='form-control'/>

    <TextField label="Enter Size"
    type='text'
    value={size}
    name='size'
    variant='outlined'
    onChange={onInputChange}
    />
    <div>
    <ChipInput label="Enter Tags"
    type='text'
    value={tags}
    name='tags'
    variant='outlined'
    onAdd={(tag) => handleAddTag(tag)}
    onDelete={(tag) => handleDeleteTag(tag)}
    />
    </div>


    <div className="d-flex justify-content-start" style={{alignItems: 'center'}}> <br />
      <FileBase
      type="file"
      multiple={false}
      onDone={({ base64 }) =>
      setSneakerData({ ...sneakerData, imageUrl: base64 })} />
    </div>

      <Button onClick={handleSubmit} variant='outlined' style={{alignItems: 'right', marginBottom: 10, marginTop: 10, width: '50%', color: 'black' }}>SUBMIT</Button> <br />
      <Button onClick={handleClear} variant='outlined' color='error' style={{alignItems: 'right', marginBottom: 10, marginTop: 10, width: '50%', color: 'black' }}>CLEAR</Button> <br />
  </div>

</Box>

  )
}
export default AddEditSneaker;
