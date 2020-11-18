import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../../images/logo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <Toolbar className='navbar fixed-top'>
                <Typography variant="h6" className={classes.title}>
                    <img className='brand-logo' src={logo} alt='' />
                </Typography>
                <div className='menu-item'>
                    <Button className='menu-btn' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Solutions
                    </Button>
                    <Button className='menu-btn' >
                        Pricing
                    </Button>
                    <Button className='menu-btn' >
                        Features
                    </Button>
                    <Button className='menu-btn' >
                        Resources
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Small and medium Business</MenuItem>
                        <MenuItem onClick={handleClose}>Enterprise</MenuItem> 
                    </Menu>
                </div>
                <Button color="inherit">Login</Button>
                {/* <Button color='primary' className='signUp-btn' variant="contained">Sign up free</Button> */}
            </Toolbar>
        </div>
    );
};

export default Navbar;