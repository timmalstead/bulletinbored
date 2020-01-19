import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { NotesStyle, SingleNote, ButtonHolder, Button, Message } from "./style"

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

const DELETE_NOTE = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(_id: $_id) {
      _id
    }
  }
`

const AllNotes = props => {
  const { loading, error, data } = useQuery(notesQuery)

  const [deleteNote] = useMutation(DELETE_NOTE, {
    update(cache, { data: { deleteNote } }) {
      const { allNotes } = cache.readQuery({ query: notesQuery })
      console.log(allNotes, deleteNote)
      const newNotes = allNotes.filter(
        element => element._id !== deleteNote._id
      )

      cache.writeQuery({
        query: notesQuery,
        data: { allNotes: newNotes }
      })
    }
  })

  if (loading) {
    return <Message>Loading...</Message>
  } else if (error) {
    return (
      <Message>{error.message}. Please try reloading in a few seconds.</Message>
    )
  }

  return (
    <NotesStyle>
      {data.allNotes.length
        ? data.allNotes.map(note => (
            <SingleNote
              key={note._id}
              onClick={e => {
                if (e.target === e.currentTarget) {
                  props.showElement({
                    navbar: true,
                    allNotes: true,
                    newNote: false,
                    editNote: [
                      true,
                      props.editOne({
                        id: note._id,
                        title: note.title,
                        content: note.content
                      })
                    ]
                  })
                }
              }}
            >
              <h3>{note.title}</h3>
              <div>
                <p>{note.content}</p>
              </div>
              <ButtonHolder>
                <Button
                  type="button"
                  onClick={e => {
                    if (e.target === e.currentTarget) {
                      e.preventDefault()
                      deleteNote({
                        variables: { _id: note._id }
                      })
                      props.showElement({
                        navbar: true,
                        allNotes: true,
                        newNote: false,
                        editNote: [false, null]
                      })
                    }
                  }}
                >
                  X
                </Button>
              </ButtonHolder>
            </SingleNote>
          ))
        : "No Notes yet"}
    </NotesStyle>
  )
}

export default AllNotes
