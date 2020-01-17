import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

import { NotesStyle, Wrapper, SingleNote, Button } from "./style"

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
    return "Loading..."
  } else if (error) {
    return `Error! ${error.message}. Please try reloading in a few seconds.`
  }

  const content = (
    <Wrapper>
      {data.allNotes.length
        ? data.allNotes.map(note => (
            <SingleNote key={note._id}>
              <h3>{note.title}</h3>
              <div>
                <p>{note.content}</p>
              </div>
              <div>
                <Button
                  onClick={() =>
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
                >
                  EDIT
                </Button>
                <Button
                  type="button"
                  onClick={e => {
                    e.preventDefault()
                    deleteNote({
                      variables: { _id: note._id }
                    })
                  }}
                >
                  DELETE
                </Button>
              </div>
            </SingleNote>
          ))
        : "No Notes yet"}
    </Wrapper>
  )

  return <NotesStyle>{content}</NotesStyle>
}

export default AllNotes
