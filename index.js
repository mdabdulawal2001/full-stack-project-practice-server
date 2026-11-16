const express = require("express");
const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

// ENVIRONMENT VARIABLES
// const uri = process.env.MONGODB_URI;
// const BETTER_AUTH_URL = process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

// Server start
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING PORT: ${PORT}`);
});

// VERCEL EXPORT
module.exports = app;
