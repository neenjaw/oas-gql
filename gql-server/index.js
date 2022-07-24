const { ApolloServer, gql } = require('apollo-server')
const { createGraphQLSchema } = require('openapi-to-graphql')

async function startServer() {
  const oas = require('../openapi.json')
  const { schema } = await createGraphQLSchema(oas)

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: 'bounded',
  })

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
}

startServer()
