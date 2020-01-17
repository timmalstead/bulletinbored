import styled from "styled-components"

const NotesStyle = styled.div`
  margin: 1em 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const Wrapper = styled.div`
  all: inherit;
`

const SingleNote = styled.div`
  margin: 0 1em 2em 1em;
  width: 19vw;
  height: 35vh;
  display: inherit;
  justify-content: space-around;
  text-align: center;
  flex-direction: column;
  padding: 0 1em 2em 1em;
  overflow: scroll;
  border-radius: 1.5em;
  box-shadow: -0.05em 0.05em 0.4em #000;

  :hover {
    transform: translateX(-0.5em) translateY(-0.5em);
  }

  @media (max-width: 800px) {
    margin: 1em 0;
    width: 85vw;
    height: 25vw;
    justify-content: center;
  }
`

const Button = styled.button`
  border: none;
  border: 0.4em solid #3c3c3c;
  margin: 0 0.5em;
  font-size: 12pt;
  background-color: #3c3c3c;
  color: #b0a8a8;
  border-radius: 0.25em;

  :hover {
    background-color: #b0a8a8;
    border: 0.4em solid #b0a8a8;
    color: #3c3c3c;
  }
`

export { NotesStyle, Wrapper, SingleNote, Button }
