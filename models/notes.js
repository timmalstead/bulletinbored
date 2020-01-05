// const mongoose = require("mongoose")
import mongoose from "mongoose"
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now() }
})

export default mongoose.model("note", NoteSchema)
