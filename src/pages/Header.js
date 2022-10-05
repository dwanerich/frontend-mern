import React from 'react'
import { AppBar, TextField } from '@material-ui/core'
import { Typography, Box, Drawer } from '@mui/material'
import deadstock from '../img/deadstock.gif'
import MyGrid from '../components/MyGrid'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../redux/features/authSlice'


const drawerWidth = 240;

let Header = (props) => {
  const { user } = useSelector(( state )=> ({ ...state.auth }));
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setLogout())}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Link to={'/'}>

    <Box onClick={handleDrawerToggle} sx={{ display: 'flexbox'}}>
      <Typography variant="h3" sx={{ my: 2 }}>
      DeadStock
        </Typography>
      <Divider />

        {user?.result?._id && (
          <>
              <Link to={'/'}><Button>Home</Button></Link> <br />
              <Link to={'/add'}><Button>Add</Button></Link> <br />
              <Link to={'/dashboard'}><Button>Dashboard</Button></Link> <br />
          </>
        )}
        {user?.result?._id ? (
              <Link onClick={handleLogout}> <Button>Logout</Button></Link>

              ) : (
              <Link to={'/login'}><Button>Login</Button></Link>
              )}
              </Box>
              </Link>

)
const container = window !== undefined ? () => window().document.body : undefined;



return (
    <>
          <AppBar position='static' style={{
          height: 200,
          alignItems: 'center',
          backgroundImage: `url(${deadstock})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundColor: 'black'}}>
          <Typography style={{color: 'yellow'}}
          variant='h1'>
          DeadStock
          </Typography>
          <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'block' }, textDecoration: 'none'}}>
            <List>
            {user?.result?._id && (
          <>
              <Link to={'/'}><Button>Home</Button></Link>
              <Link to={'/add'}><Button>Add</Button></Link>
              <Link to={'/dashboard'}><Button>Dashboard</Button></Link>
          </>
        )}
              {user?.result?._id ? (
              <Link onClick={handleLogout}><Button>Logout</Button></Link>

              ) : (
              <Link to={'/login'}><Button>Login</Button></Link>
              )}
            </List>
          </Box>
        </Toolbar>
          </AppBar>
          <br /> <br />

          <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
</>
)
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
