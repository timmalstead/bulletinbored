// const express = require("express")
import express from "express"
// const graphqlHttp = require("express-graphql")
import graphqlHttp from "express-graphql"
// const schema = require("./schema")
import schema from "./schema"

const app = express()
require("dotenv").config()

const PORT = process.env.PORT

require("./db/db")

app.get("/", (req, res) => {
  console.log(req)
  res.json({ message: "up and running" })
})

app.use("/graphql", graphqlHttp({ schema: schema, graphiql: true }))

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`))
