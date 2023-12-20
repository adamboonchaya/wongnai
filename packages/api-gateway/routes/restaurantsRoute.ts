import { Router, Request, Response } from 'express'
import axios from 'axios'

const restaurantsRouter = Router()

restaurantsRouter.get('/restaurants/:restaurantId', async (req: Request, res: Response) => {
	try {
		const restaurantId = req.params.restaurantId
		const restaurantUri = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
		const restaurant = await axios.get(restaurantUri)

		res.json(restaurant.data)
	} catch (error) {
		console.error('Error fetching data:', error)
		res.status(500).send('Internal Server Error')
	}
})

export default restaurantsRouter