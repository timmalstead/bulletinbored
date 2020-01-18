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

const SingleNote = styled.div`
  margin: 0 1em 2em 1em;
  width: 19vw;
  height: 35vh;
  display: inherit;
  justify-content: space-between;
  text-align: center;
  flex-direction: column;
  padding: 0 1em 2em 1em;
  overflow: hidden;
  border-radius: 0.5em;
  box-shadow: -0.05em 0.05em 0.4em #000;
  transform: translateX(0) translateY(0);
  transition: transform 0.25s linear;

  :hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    transition: transform 0.25s linear;
  }

  h3 {
    align-self: flex-start;
  }

  @media (max-width: 800px) {
    margin: 1em 0;
    width: 85vw;
    height: 25vw;
    justify-content: center;
  }
`
const ButtonHolder = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: flex-end;
`

const Button = styled.button`
  border: none;
  border: 0.4em solid #3c3c3c;
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

const Message = styled.p`
  text-align: center;
`

export { NotesStyle, SingleNote, ButtonHolder, Button, Message }
