import styled from 'styled-components'
import { navlinks } from "../utils/data"

const Navbar = () => {
  return (
    <Wrapper>
      <ul>
        {navlinks.map((navlink) => <li key={navlink.id}><a href={navlink.href}>{navlink.text}</a></li>)}
      </ul>
    </Wrapper>
  )
}


const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 52px;
  ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 32px;
    border-bottom: 1px solid #ddd;
    li{
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      transition: all .3s ease-in-out;
      a{
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        line-height: 21px;
        color: #020202;
        text-transform: uppercase;
      }
    }
    li:hover{
      border-bottom: 4px solid #000;
    }
  }
`

export default Navbar