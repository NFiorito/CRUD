const {json} = require('body-parser');
const { connect } = require('../infra/connection');
const connection = require('../infra/connection');

class Products {
    add(product, res){
        const sql = "INSERT INTO products SET ?"

        connection.query(sql, product, (error, result) => {
            if(error) res.status(400).json(error);
            else res.status(200).json(result);
        })
    }
    update(id, values, res){
        const sql = "UPDATE products SET ? WHERE id=?"

        connection.query(sql, [values, id], (error, results) => {
            if(error) res.status(400).json(error);

            else res.status(200).json(results);
        })
    }
    delete(id, res){
        const sql = "DELETE FROM products WHERE id=?"

        connection.query(sql, id, (error, results) => {
            if(error) res.status(400).json(error);
            
            else res.status(200).json(results);
        })
    }
    getOne(id, res){
        const sql = "SELECT * FROM products WHERE id=?";

        connection.query(sql, id, (error, results) => {
            if(error) res.status(400).json(error);

            else res.status(200).json(results);
        })
    }
    getAll(res){
        const sql = "SELECT * FROM products";

        connection.query(sql, (error, results) => {
            if(error) res.status(400).json(error);

            else res.status(200).json(results);
        })
    }
}

module.exports = new Products;