import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Home  from './pages/Home'
import Header from './pages/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import AddEditSneaker from './pages/AddEditSneaker'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUser } from './redux/features/authSlice'



const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    dispatch(setUser(user))
  }, [user])


  return (
    <BrowserRouter>

    <Container maxWidth='xl'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/addSneaker' element={<AddEditSneaker />}/>
        <Route path='/editSneaker/:id' element={<AddEditSneaker />}/>


      </Routes>
    </Container>
    </BrowserRouter>

  );
}

export default App;
