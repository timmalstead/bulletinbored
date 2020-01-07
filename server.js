import cors from "cors"
import express from "express"
import graphqlHttp from "express-graphql"
import schema from "./schema"

const app = express()
require("dotenv").config()

const PORT = process.env.PORT

require("./db/db")

app.use(cors())

app.use("/graphql", graphqlHttp({ schema: schema, graphiql: true }))

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
