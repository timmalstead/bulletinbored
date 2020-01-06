import React from "react"

const AllNotes = props => {
  let data = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>All Notes</h1>
      <div>
        <div>
          {data.length > 0
            ? data.map((item, i) => (
                <div key={i}>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet.
                    <br />
                  </div>

                  {/* <footer>
                      <Link to={`note/${i}`} className="card-footer-item">
                        Edit
                      </Link>
                      <a href="#" className="card-footer-item">
                        Delete
                      </a>
                    </footer> */}
                </div>
              ))
            : "No Notes yet"}
        </div>
      </div>
    </div>
  )
}

export default AllNotes
