import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import {Mail, Pets, Notifications, Flare} from "@mui/icons-material"
import React from 'react'
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});
const Search = styled('div')(({theme}) => 
    ({
        backgroundColor: 'white',
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: '40%'
    }))
    const Icons = styled(Box)(({theme}) => 
    ({
        display: 'flex',
        gap: "20px",
        alignItems: "center"
    }))
const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: "block"}}}>LAMA DEV</Typography>
        <Pets sx={{display: {xs: 'block', sm: "none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
            <Badge badgeContent={4} color='error'>
                <Mail/>
            </Badge>
             <Badge badgeContent={4} color='error'>
                <Notifications/>
            </Badge>
            <Avatar sx={{width: 30, height: 30}} src='../assets/1000173342.jpg'/>
        </Icons>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar