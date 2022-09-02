const { getProducts, getProductByName, getCategory, getProductByCategory } = require("../database/query");


//Llamada a las query para ser consumidas
const controller = {
    products: async(req, res) => {
        res.json(await getProducts(req.body))
    },
    product: async(req, res) => {
        const { name } = req.params
        if(!name) {
            res.json(await getProducts(req.body))
        } else {

        }
        res.json(await getProductByName(name))
    },
    categories: async(req, res) => {
        res.json(await getCategory(req.body))
    },
    category: async(req, res) => {
        const { name } = req.params;
        res.json(await getProductByCategory(name));
    }
}

module.exports = controller;