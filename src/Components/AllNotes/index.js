import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { Link } from "react-router-dom"

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

const AllNotes = props => {
  const { loading, error, data } = useQuery(notesQuery)

  if (loading) {
    return "Loading..."
  } else if (error) {
    return `Error! ${error.message}`
  }

  return (
    <div>
      <h1>All Notes</h1>
      <div>
        <div>
          {data.allNotes.length
            ? data.allNotes.map(note => (
                <div key={note._id}>
                  <h3>{note.title}</h3>
                  <div>
                    <p>{note.content}</p>
                  </div>
                  <button
                    onClick={() =>
                      props.showElement({
                        navbar: true,
                        allNotes: true,
                        newNote: false,
                        editNote: [true, props.editOne(note._id)]
                      })
                    }
                  >
                    Edit Note
                  </button>
                  <Link to={`${note._id}`}>Experiment</Link>
                </div>
              ))
            : "No Notes yet"}
        </div>
      </div>
    </div>
  )
}

export default AllNotes
