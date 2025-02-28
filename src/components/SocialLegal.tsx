import styled from 'styled-components'
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

import { legalLinks } from '../utils/data';

const SocialLegal = () => {
  return (
    <Wrapper>
      <div className='social-media'>
        <FaFacebookF />
        <FaYoutube />
        <FaInstagram />
        <FaTiktok />
      </div>
      <div className='nav-legal'>
        {legalLinks.map((link) => <h3 key={link.id}><a href={link.href}>{link.text}</a></h3>)}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  column-gap: 56px;
  padding: 0 150px;
  border-top: 1px solid #bcbcbc;
  .social-media{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    svg{
      background: #313131;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
    }
  }
  .nav-legal{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    column-gap: 20px;
    h3{
      font-size: 14px;
      text-transform: uppercase;
      a{
        text-decoration: none;
        font-weight: 600;
        color: #000;
      }
    }
  }
`

export default SocialLegal