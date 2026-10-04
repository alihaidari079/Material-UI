import { Box } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box sx={{
        bgcolor: 'lightblue',
        flex: 1,
        p: 2,
        display: {xs: 'none', sm: "block"}
    }} flex={1}>Sidebar</Box>
  )
}

export default Sidebar