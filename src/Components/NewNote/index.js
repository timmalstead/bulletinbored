import React from "react"

const NewNote = () => {
  return (
    <div>
      <h1>New Note</h1>​
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default NewNote
