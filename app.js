// Import Express
const express = require('express');
const redis = require('redis');

const app = express();

// Define a port
const PORT = 3200;

// Creat a redis client
const redisClient = 
redis.createClient({
	 host: process.env.REDIS_HOST || 'localhost',
 	 port: process.env.REDIS_PORT || 6379,
});

// Connect to Redis
redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.log('Redis connection error:', err);
});

// Define a route that sets and gets a value from Redis 
app.get('/', async (req, res) => {
	try {
		// set a key in Redis
		await redisClient.set('greeting', 'Hello, Muhamed!');
		// get the value of the key
		const greeting = await
	redisClient.get('greeting');
		res.send('Hello , Muahmed! Welcome to your Node.js Application');
	} catch (error){
		res.status(500).send('Error interacting with Redis: ' + error.message);
	}
});


//Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

