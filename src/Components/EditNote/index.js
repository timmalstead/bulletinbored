import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const EditNote = props => {
  console.log(props.editId, gql)

  const singleNoteQuery = gql`
    query getNote($_id: ID!) {
      getNote(_id: $_id) {
        _id
        title
        content
        date
      }
    }
  `

  const { loading, error, data } = useQuery(singleNoteQuery, {
    headers: { "Content-Type": "application/json" }
  })

  //okay, now just figure out how to do the

  console.log(loading, error, data)

  return (
    <div>
      <h1>Edit Note</h1>​
      <div>
        <form>
          <div>
            <label>Note Title</label>
            <div>
              <input type="text" placeholder="Note Title" />
            </div>
          </div>
          ​
          <div>
            <label>Note Content</label>
            <div>
              <textarea rows="10" placeholder="Note content here..."></textarea>
            </div>
          </div>
          ​<button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditNote
