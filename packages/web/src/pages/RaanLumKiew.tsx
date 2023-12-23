import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MenuItem from '../components/MenuItem'
import RestaurantInfo from '../components/RestaurantInfo'
import { Container, CssBaseline, Box, CircularProgress } from '@mui/material'

interface RestaurantData {
  name: string;
  id: number;
  coverImage: string;
  menus: string[];
  activeTimePeriod: {
    open: string
    close: string
  };
}

interface MenuItem {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPercent: number;
  discountedTimePeriod?: {
    begin: string;
    end: string;
  };
  sold: number;
  totalInStock: number;
  largeImage?: string;
  options: {
    label: string;
    choices: {
      label: string;
    }[];
  }[];
}

const RaanLumKiew = () => {

  const [restaurantData, setRestaurantData] = useState<RestaurantData>()
  const [loadingRestaurant, setLoadingRestaurant] = useState(true);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/restaurants/567051/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const data = await response.json()
        setRestaurantData(data)
        setLoadingRestaurant(false)

        const menuPromises = data.menus.map(async (menu: string) => {
          const menuResponse = await fetch(`http://localhost:3001/restaurants/567051/menus/${menu}/full`)
          if (!menuResponse.ok) {
            throw new Error(`Failed to fetch menu items for ${menu}`)
          }

          const menuData = await menuResponse.json()
          return menuData
        })

        const menuResults = await Promise.all(menuPromises);
        setMenuItems(menuResults);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header
        restaurantName={restaurantData?.name || 'Unknown Restaurant'}
      />
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            minWidth: { md: '100vw', lg: '100%' },
          }}
        >
          <Banner
            coverImg='https://img.wongnai.com/p/1920x0/2021/03/09/fc6f2b50e313418590eb113cbc4981c2.jpg'
          />

          {loadingRestaurant ? (
            <CircularProgress />
          ) : (
            <RestaurantInfo
              restaurantName={restaurantData?.name || 'Unknown Restaurant'}
              activeTimePeriod={restaurantData?.activeTimePeriod || { open: 'N/A', close: 'N/A' }}
            />
          )}

          {loading ? (
            <CircularProgress />
          ) : (
            menuItems.map((menuData) => (
              <MenuItem
                key={menuData.id}
                menuName={menuData.name}
                thumbnailImg={menuData.thumbnailImage ? menuData.thumbnailImage : ''}
                fullPrice={menuData.fullPrice}
                discountedPercent={menuData.discountedPercent}
                discountedTimePeriod={menuData.discountedTimePeriod}
                sold={menuData.sold}
                totalInStock={menuData.totalInStock}
                largeImage={menuData.largeImage}
                options={menuData.options}
              />
            ))
          )}
        </Box >
      </Container>
    </>
  )
}

export default RaanLumKiew