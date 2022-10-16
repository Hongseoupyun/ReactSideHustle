// Database connections
const { Pool } = require('pg');

const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE,
})

pool.connect().then(() => {
	console.log("Database connection established!")
	console.log("Port:", process.env.DB_PORT)
}).catch( e => {
  console.log("Database not connected")
	throw new Error(e); 
})

module.exports = pool;