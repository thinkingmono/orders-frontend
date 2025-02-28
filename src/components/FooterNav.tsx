import { FooterNavLink } from "./MainArea"
import styled from 'styled-components'

const FooterNav = ({ title, links }: { title: string, links: FooterNavLink[] }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <nav>
        <ul className='menu-links'>
          {links.map((link) => <li key={link.id}><a href={link.href}>{link.text}</a></li>)}
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3{
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .menu-links{
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    li{
      list-style:none;
      a{
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
`

export default FooterNav