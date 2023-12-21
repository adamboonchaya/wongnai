import request from 'supertest'
import express from 'express'
import menuRouter from './menuRoute'

const app = express()

app.use(express.json())
app.use('/', menuRouter);

describe(`menuRouter short`, () => {
    it(`Handles get short menu`, async () => {
        const menuName = encodeURIComponent(`Bailey’s Strawberry Shortcake`);
        const response = await request(app)
            .get(`/restaurants/227018/menus/${menuName}/short`)
            .expect('Content-Type', /json/)
        expect(response.status).toEqual(200)
    })

    it(`Handles correct short menu API response`, async () => {
        const menuName = encodeURIComponent(`Bailey’s Strawberry Shortcake`);
        const response = await request(app)
            .get(`/restaurants/227018/menus/${menuName}/short`)
        expect(response.body.name).toEqual(`Bailey’s Strawberry Shortcake`)
        expect(response.body.id).toEqual(`Bailey’s Strawberry Shortcake`)
        expect(response.body.discountedPercent).toEqual(0)
        expect(response.body.fullPrice).toEqual(270)
        expect(response.body.sold).toEqual(100)
        expect(response.body.totalInStock).toEqual(100)
    })
})

describe(`menuRouter long`, () => {
    it(`Handles get full menu`, async () => {
        const menuName = encodeURIComponent(`ข้าวหมูกระเทียม`);
        const response = await request(app)
            .get(`/restaurants/567051/menus/${menuName}/full`)
            .expect('Content-Type', /json/)
        expect(response.status).toEqual(200)
    })

    it(`Handles correct full menu API response`, async () => {
        const menuName = encodeURIComponent(`ข้าวหมูกระเทียม`);
        const response = await request(app)
            .get(`/restaurants/567051/menus/${menuName}/full`)
        expect(response.body.name).toEqual(`ข้าวหมูกระเทียม`)
        expect(response.body.id).toEqual(`ข้าวหมูกระเทียม`)
        expect(response.body.discountedPercent).toEqual(0)
        expect(response.body.fullPrice).toEqual(80)
        expect(response.body.sold).toEqual(100)
        expect(response.body.totalInStock).toEqual(200)
        expect(response.body.largeImage).toEqual(`https://img.wongnai.com/p/1920x0/2020/07/01/85db2ae47add409682a1c4b054e2e25b.jpg`)
    })
})