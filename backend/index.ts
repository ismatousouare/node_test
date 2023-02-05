import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const Twitter = require("twitter-v2");

//Create a client user
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY ,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});


app.get("/search", async (req, res) => {
  const { data } = await client.get("tweets/search/recent", {query: req.query.q });
  /* console.log(data); */
  res.send(data);

});                      


app.get("/users/:user_id", async (req, res) => {
  const { data } = await client.get("users/by/username/" + req.params.user_id);
 /*  console.log(data); */
  res.send(data);

}); 

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});