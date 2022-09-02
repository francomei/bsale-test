const { Router } = require('express');
const controller = require("../controller/controller");

const router = Router();

//Rutas de la api, se comunica con el controlador
router.get("/products", controller.products);
router.get("/products/:name", controller.product);
router.get("/category", controller.categories);
router.get("/category/:name", controller.category);

module.exports = router;