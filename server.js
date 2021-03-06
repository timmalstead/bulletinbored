import cors from "cors"
import express from "express"
import graphqlHttp from "express-graphql"
import path from "path"
import schema from "./schema"

const app = express()
require("dotenv").config()

app.use(express.static(path.join(__dirname, "build")))

const PORT = process.env.PORT || 8000

require("./db/db")

app.use(cors())

app.use("/graphql", graphqlHttp({ schema: schema, graphiql: true }))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
