import { Router, Request, Response } from 'express'
import axios from 'axios'

const menuRouter = Router()

menuRouter.get('/restaurants/:restaurantId/menus/:menuName/:menuSize', async (req: Request, res: Response) => {
  try {
    const { restaurantId, menuName, menuSize } = req.params
    const menuUri = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/${menuSize}.json`
    const menu = await axios.get(menuUri)

    res.json(menu.data)
  } catch (error) {
    console.error('Error fetching menu data:', error)
    res.status(500).send('Internal Server Error')
  }
})

export default menuRouter
