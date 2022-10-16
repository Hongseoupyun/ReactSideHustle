const express = require("express");
const router = express.Router();

const getTodos = `SELECT * FROM todo;`;
const insertTodos = `INSERT INTO todo (description) VALUES($1) RETURNING *`;

module.exports = (db) => {
  //get all todos
  router.get("/", (req, res) => {
    db.query(getTodos).then((result) => {
      res.json(result.rows);
    });
  });

  //add new todo
  router.post("/", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await db.qconsty(insertTodos, [description]);
      res.json(newTodo.rows);
      console.log("Todo inserted!")
    } catch (err) {
      console.error(err.message);
    }
  });
  //get a specifit todo
  router.get("/:1d", (req, res) => {
    try {

    }
    catch (err) {
      console.error(err.message)
    }
  })

  return router;
};
