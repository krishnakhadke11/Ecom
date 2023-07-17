import styled from '@emotion/styled';
import { Typography, Box, Menu, MenuItem } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useState } from 'react'

const Component = styled(Menu)`
    margin-top : 5px;
`;

function Profile({account, setAccount}) {

    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logout = () => {
        setAccount('')
    }

  return (
    <>
        <Box style={{ cursor : "pointer"}} onClick={(event) => handleClick(event)}>
            <Typography style={{marginTop : 2}}>{account}</Typography>
        </Box>
        <Component
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
        >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem  onClick={() => {handleClose(); logout();}}>
                <LogoutIcon style={{ fontSize:20, paddingRight:4 }} color = "primary"/>
                <Typography>Logout</Typography>
            </MenuItem>
        </Component>
    </>
  )
}

export default Profile