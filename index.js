const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolver");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

async function startServer() {
  server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });

  mongoose.connect(process.env.CONNECT_DB, () =>
    console.log("Connected to DB")
  );

  app.listen({ port: 4500 }, () => {
    console.log("Server is ON");
  });
}

startServer();
