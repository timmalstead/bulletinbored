import note from "./models/notes"
export const resolvers = {
  Query: {
    async allNotes() {
      return await note.find()
    }
  }
}
