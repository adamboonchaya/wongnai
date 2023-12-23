import express from 'express'
import restaurantRouter from './routes/restaurantsRoute/restaurantsRoute'
import menuRouter from './routes/menuRoute/menuRoute'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', restaurantRouter)
app.use('/', menuRouter);

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`)
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`)
}
