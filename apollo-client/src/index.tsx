const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");
const express = require("express");
const app = express();

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({ port: 3001 }, () => {
  console.log(`🚀 Server ready at http://localhost:3001`);
});

