const connection = require("./db");

//Funcion que trae todos los productos de la base de datos
const getProducts = () => {
    const sql = "SELECT * FROM product";
    return new Promise((resolve => {
        connection.query(sql, (err, result) => {
            if(err) throw err;
            resolve(result);
        })
    }))
}

//Funcion que busca productos por nombre en la base de datos
const getProductByName = (name) => {
    const sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`;
    return new Promise((resolve => {
        connection.query(sql, ["%" + name + "%"], (err, result) => {
        if(err) throw err;
        resolve(result);
        })
    }))
}

//Funcion que trae todas las categorias
const getCategory = () => {
    const sql = "SELECT * FROM category";
    return new Promise((resolves => {
        connection.query(sql, (err, result) => {
            if(err) throw err;
            resolves(result);
        })
    }))
}

//Funcion que selecciona los productos de una categoria
const getProductByCategory = (id) => {
        const sql = `SELECT * FROM product WHERE category LIKE '%${id}%'`;
        return new Promise(resolve => {
            connection.query(sql, ["%" + id + "%"], function (error, results) {
                if (error) throw error;
                resolve(results)
            });
        });
}

module.exports = { getProducts, getProductByName, getCategory, getProductByCategory }