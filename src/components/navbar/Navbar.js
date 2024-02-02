import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const username = useSelector((state) => state?.authentication?.value?.username);

    return (
        <AppBar position="static" sx={{ backgroundColor: '#607d8b' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, color: '#d3d3d3' }}>
                    MetaPolis
                </Typography>
                <Typography variant="h6">{username}</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;