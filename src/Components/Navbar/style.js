import styled from "styled-components"

const NavbarStyle = styled.nav`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -0.05em 0.05em 0.3em #000;

  div {
    all: inherit;

    .sticky {
      position: fixed;
      top: 0;
    }
  }
`
const StickyNav = styled(NavbarStyle)`
  position: fixed;
  top: 0;
`

export { NavbarStyle, StickyNav }
