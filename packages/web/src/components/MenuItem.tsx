import React, { useState, useEffect } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  CssBaseline,
  Typography,
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../styles/theme'
import MenuDetail from './MenuDetail';

interface MenuItemProps {
  menuName: string
  thumbnailImg?: string
  fullPrice: number
  discountedPercent: number
  discountedTimePeriod?: {
    'begin': string
    'end': string
  }
  sold: number
  totalInStock: number
  largeImage?: string
  options: {
    'label': string
    'choices': {
      'label': string
    }[]
  }[]
}

const MenuItem: React.FC<MenuItemProps> = ({
  menuName,
  thumbnailImg,
  fullPrice,
  discountedPercent,
  discountedTimePeriod,
  sold,
  totalInStock,
  largeImage,
  options,
}) => {

  const discountedPrice = fullPrice - (fullPrice * discountedPercent) / 100;
  const showDiscount = discountedPercent > 0;
  const [timeRemaining, setTimeRemaining] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (discountedTimePeriod?.end) {
      const calculateTimeRemaining = () => {
        const currentTime = new Date();
        const discountEndTime = new Date(`${currentTime.toDateString()} ${discountedTimePeriod.end}`);

        if (currentTime < discountEndTime) {
          const timeDifference = discountEndTime.getTime() - currentTime.getTime();
          const hoursRemaining = Math.floor(timeDifference / (60 * 60 * 1000));
          const minutesRemaining = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
          setTimeRemaining(`${hoursRemaining}h ${minutesRemaining}m`);
        }
      };

      calculateTimeRemaining();
      const intervalId = setInterval(calculateTimeRemaining, 60000);
      return () => clearInterval(intervalId);
    }
  }, [discountedTimePeriod?.end]);

  const handleCardClick = () => {
    setIsPopupOpen(true);
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Card
        onClick={handleCardClick}
        sx={{
          width: '100%',
          height: 120,
          backgroundColor: 'primary.light',
          mb: 2,
          cursor: 'pointer',
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
          <CardMedia
            component='img'
            src={thumbnailImg}
            alt='Menu image'
            sx={{
              height: 120,
              width: 120,
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography
              variant='h6'
              component='div'
              fontWeight='bold'
            >
              {menuName}
            </Typography>
          </CardContent>
          <CardContent sx={{ marginLeft: 'auto' }}>
            {showDiscount ? (
              <>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  style={{ textDecoration: 'line-through' }}
                >
                  ${fullPrice.toFixed(2)}
                </Typography>

                <Typography
                  variant='h6'
                  color={'error.main'}
                >
                  ฿{discountedPrice.toFixed(2)}
                </Typography>

                <Typography
                  variant='body2'
                  color={'error.main'}
                >
                  {timeRemaining}
                </Typography>
              </>
            ) : (
              <Typography variant='h6'>฿{fullPrice.toFixed(2)}</Typography>
            )}
          </CardContent>
        </Box>
      </Card>

      <MenuDetail
        menuName={menuName}
        thumbnailImg={thumbnailImg ? thumbnailImg : ''}
        isPopupOpen={isPopupOpen}
        handleClosePopup={handleClosePopup}
        largeImage={largeImage}
        options={options}
      />

    </ThemeProvider >
  )
}

export default MenuItem