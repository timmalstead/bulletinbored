import React from "react"

const EditNote = props => {
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
