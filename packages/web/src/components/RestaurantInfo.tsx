import React from 'react'
import { Box, CssBaseline, Typography, Card } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'


interface RestaurantInfoProps {
  restaurantName: string,
  activeTimePeriod: {
    open: string
    close: string
  }
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurantName, activeTimePeriod }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
        sx={{
          backgroundColor: 'primary.light',
          padding: '16px',
          marginBottom: '16px',
          width: '100%'
        }}>
        <Box
          sx={{
            textAlign: 'left',
            borderRadius: '8px',
          }}
        >
          <Typography variant='h4'>
            {restaurantName}
          </Typography>
          <Typography variant='body2' color='textSecondary' gutterBottom>
            Opening Times: {activeTimePeriod.open} - {activeTimePeriod.close}
          </Typography>
        </Box>
      </Card>
    </ThemeProvider>
  )
}

export default RestaurantInfo