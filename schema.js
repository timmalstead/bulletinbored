// const makeExecutableSchema = require("graphql-tools")
import { makeExecutableSchema } from "graphql-tools"
// const resolvers = require("./resolvers")
import { resolvers } from "./resolvers"

const typeDefs = `
    type Note {
    _id: ID!,
    title: String!,
    date: Date,
    content: String
}

scalar Date

type Query {
    allNotes: [Note]
}`

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema
