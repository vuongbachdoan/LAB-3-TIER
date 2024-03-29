const connection = require("./model");

const todoController = {
    getAll: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        connection.query(
            "SELECT * FROM main.todos;",
            function (err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            }
        );
    },

    getOne: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const id = req.params.id;
        connection.query(
            `SELECT * FROM main.todos WHERE id = ${id};`,
            function (err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            }
        );
    },

    deleteOne: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const id = req.params.id;
        connection.query(
            `DELETE FROM main.todos WHERE id = ${id};`,
            function (err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            }
        );
    },

    updateOne: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const id = req.params.id;
        const content = req.body.content;
        connection.query(
            `UPDATE main.todos SET content = '${content}' WHERE id = ${id};`,
            function (err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            }
        );
    },

    create: async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        const content = req.body.content;
        connection.query(
            `INSERT INTO main.todos (content) VALUES ('${content}');`,
            function (err, result, fields) {
                if (err) res.send(err);
                if (result) res.send(result);
            }
        );
    }
};

module.exports = todoController;