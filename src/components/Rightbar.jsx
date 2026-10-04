import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box sx={{
        bgcolor: "lightcoral",
        p: 2,
        flex: 2,
        display: {xs: 'none', sm: "block"}
    }}>Rightbar</Box>
  )
}

export default Rightbar