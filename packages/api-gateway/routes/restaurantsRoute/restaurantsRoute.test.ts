import request from 'supertest'
import express from 'express'
import restaurantsRouter from './restaurantsRoute'

const app = express()

app.use(express.json())
app.use('/', restaurantsRouter);

describe(`restaurantsRouter`, () => {
    it(`Handles get restaurant`, async () => {
        const response = await request(app)
            .get(`/restaurants/227018`)
            .expect('Content-Type', /json/)
        expect(response.status).toEqual(200)
    })

    it(`Handles correct short menu API response`, async () => {
        const response = await request(app)
            .get(`/restaurants/227018/`)
        expect(response.body.name).toEqual(`Ekkamai Macchiato - Home Brewer`)
        expect(response.body.id).toEqual(`227018`)
        expect(response.body.activeTimePeriod.open).toEqual(`08:00`)
        expect(response.body.activeTimePeriod.close).toEqual(`17:00`)
    })
})
