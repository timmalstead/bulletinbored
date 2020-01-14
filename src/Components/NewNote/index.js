import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const addNote = gql`
  mutation createNote($title: String!, $content: String) {
    createNote(input: { title: $title, content: $content }) {
      _id
      title
      content
      date
    }
  }
`
const notesQuery = gql`
  {
    allNotes {
      _id
      title
      content
      date
    }
  }
`

const NewNote = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const [createNote] = useMutation(addNote, {
    update(cache, { data: { createNote } }) {
      const { allNotes } = cache.readQuery({ query: notesQuery })

      cache.writeQuery({
        query: notesQuery,
        data: { allNotes: allNotes.concat([createNote]) }
      })
    }
  })

  return (
    <div>
      <h1>New Note</h1>​
      <form
        onSubmit={e => {
          e.preventDefault()
          createNote({
            variables: {
              title: title,
              content: content,
              date: Date.now()
            }
          })
        }}
      >
        <div>
          <label>Note Title</label>
          <div>
            <input
              name="title"
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
        </div>
        ​
        <div>
          <label>Note Content</label>
          <div>
            <textarea
              name="content"
              rows="10"
              placeholder="Note content here..."
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewNote
