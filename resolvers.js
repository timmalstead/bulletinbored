import note from "./models/notes"
export const resolvers = {
  Query: {
    async getNote(root, { _id }) {
      return await note.findById(_id)
    },

    async allNotes() {
      return await note.find()
    }
  },
  Mutation: {
    async createNote(root, { input }) {
      return await note.create(input)
    },
    async updateNote(root, { _id, input }) {
      return await note.findByIdAndUpdate({ _id }, input, { new: true })
    },
    async deleteNote(root, { _id }) {
      return await note.findOneAndRemove({ _id })
    }
  }
}
