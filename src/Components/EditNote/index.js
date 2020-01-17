import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"

const EditNote = props => {
  const UPDATE_NOTE = gql`
    mutation updateNote($_id: ID!, $title: String!, $content: String) {
      updateNote(_id: $_id, input: { title: $title, content: $content }) {
        _id
        title
        content
      }
    }
  `

  const [title, setTitle] = useState(props.editInfo.title)
  const [content, setContent] = useState(props.editInfo.content)

  const [updateNote] = useMutation(UPDATE_NOTE)

  return (
    <div>
      <h1>Edit Note</h1>​
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            updateNote({
              variables: {
                _id: props.editInfo.id,
                title: title ? title : props.editInfo.title,
                content: content ? content : props.editInfo.content
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
                name="title"
                rows="10"
                placeholder="Note content here..."
                value={content}
                onChange={e => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          ​<button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default EditNote
