const express = require('express');
const router = express.Router();

const getUsers = `SELECT * FROM users;`;

module.exports = (db) => {
  router.get("/",(req,res)=>{
    db.query(getUsers).then((result)=>{
      res.send(result)
    })
  })
  return router;
}