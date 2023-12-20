import express from 'express';
import axios from 'axios';

const app = express();
const port = 3001;

app.get('/restaurants/:restaurantId', async (req: any, res: any) => {
	try {
		const restaurantId = req.params.restaurantId;
		const restaurantUri = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`;
		const restaurant = await axios.get(restaurantUri);

		res.json(restaurant.data);
	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).send('Internal Server Error');
	}
});

app.get('/restaurants/:restaurantId/menus/:menuName/:menuSize', async (req: any, res: any) => {
	try {
	  const restaurantId = req.params.restaurantId;
	  const menuName = req.params.menuName
	  const menuSize = req.params.menuSize
	  const menuUri = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menuName}/${menuSize}.json`;
	  const restaurant = await axios.get(menuUri);
  
	  res.json(restaurant.data);
	} catch (error) {
	  console.error('Error fetching data:', error);
	  res.status(500).send('Internal Server Error');
	}
});



try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
