import React, { useState } from 'react'
import {
  Box,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../styles/theme'


interface MenuDetailProps {
  menuName: string
  thumbnailImg?: string
  isPopupOpen: boolean
  handleClosePopup: () => void
  largeImage?: string
  options: {
    'label': string
    'choices': {
      'label': string
    }[]
  }[]
}

const MenuDetail: React.FC<MenuDetailProps> = ({
  menuName,
  thumbnailImg,
  isPopupOpen,
  handleClosePopup,
  largeImage,
  options
}) => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Dialog
        open={isPopupOpen}
        onClose={handleClosePopup}
        fullWidth={true}
      >
        <DialogContent>
          <Box
            component='img'
            sx={{
              width: '100%',
            }}
            alt='Menu image'
            src={largeImage ? largeImage : thumbnailImg}
          />

          <DialogActions
            sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            <IconButton>
              <ClearIcon onClick={handleClosePopup} />
            </IconButton>
          </DialogActions>

          <DialogTitle
            fontWeight='bold'
          >{menuName}
          </DialogTitle>

          {options.map((option, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                mx: 2,
                mb: 2,
                padding: 2
              }}>
              <Typography variant="h5">{option.label}</Typography>
              <List>
                {option.choices.map((choice, choiceIndex) => (
                  <ListItem
                    key={choiceIndex}
                    sx={{
                      py: 0
                    }}
                  >
                    <ListItemText primary={choice.label} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          ))}

        </DialogContent>
      </Dialog>
    </ThemeProvider>
  )
}

export default MenuDetail