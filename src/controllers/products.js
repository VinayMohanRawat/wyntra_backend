const Products = require('../model/products');
const connectDb = require('../database/db');

const productsList = async (req, res) => {
    try {
        await connectDb();
        const data = await Products.find({ category: 'smartphones' });
        return res.status(200).send({ status: true, data: data })

    } catch (error) {
        console.log(error)
    }
}

const productsCategoryList = async (req, res) => {
    try {
        const params = req.params
        const category = params.category

        const data = await Products.find({ category: category });
        return res.status(200).send({ status: true, data: data })

    } catch (error) {
        console.log(error)
    }
}

const addProduct = async (req, res) => {
    try {

        const product = req.body;

        for (ele of product) {
            const {
                title, description, discountPercentage, rating, stock, brand,
                price, category, thumbnail, images
            } = ele

            const data = {
                title,
                description,
                discountPercentage,
                rating,
                stock,
                brand,
                price,
                category,
                thumbnail,
                images
            }

            await Products.create(data)

        }

        return res.status(201).send({ status: true, message: 'Created successfully!' })

    } catch (error) {
        console.log(error)
    }
}









module.exports = { productsList, productsCategoryList, addProduct }