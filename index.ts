import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const Twitter = require("twitter-v2");

//Create a client user
const client = new Twitter({
  consumer_key: 'suxe05Eq4V9Bexk3V2yLIYfMf',
  consumer_secret: 'ci5AMjowYIUT1QS1nd5dlrSILfWBCKABsvW7ss1pt74rnVVhE0',
  access_token_key: '1415923632-QBjNYPZ8jjF26LtnjcRRCbDCoLWs2uMil2y6Lxp',
  access_token_secret: 'RjJ3OlelHxIBs2odSV2rYOnXdQKYf8SqQOv6nLD81IlSh',
});


app.get("/search", async (req, res) => {
  const { data } = await client.get("tweets/search/recent", {query: req.query.q });
  console.log(data);
  res.send(data);

});                      


app.get("/users/:user_id", async (req, res) => {
  const { data } = await client.get("users/by/username/" + req.params.user_id);
  console.log(data);
  res.send(data);

}); 

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});