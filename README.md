# apollo_server_mongodb
Apollo Server
Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client. It's the best way to build a production-ready, self-documenting GraphQL API that can use data from any source.

You can use Apollo Server as:
A gateway for a federated supergraph
The GraphQL server for a subgraph in a federated supergraph
A stand-alone GraphQL server, including in a serverless environment
An add-on to your application's existing Node.js middleware (such as Express or Fastify) ( used this one for hosting the apollo server locally )

Node.js npm packages used:
	npm install apollo-server-express express mongoose
npm install nodemon 
(nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.)
(mongoose is a tool that helps to connect to the mongodb)

Create a database and collection on Mongodb to which you want to connect

Write the following code to set up the apollo server on localhost and create the model and schema required for it


Here ApolloServer required “typeDefs” and “resolvers” as input which is in the form ({ typeDefs , resolvers })

TypeDefs help to define the query's structure in graphql using gql from ApolloServer.
 
Resolvers is used to write the logical code which is used to get the desired output

Also created Custom resolvers (User:{ address ….}}) which is helpful to merge more than one database collection and get as the single output

Used input arguments like ‘limit’ and ‘where’ which helps to get output with limitation and with ‘where’ to get output depending on the age of the user which can be greater than, equal to or lesser than
