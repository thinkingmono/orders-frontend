import { linksLeft, linksRight } from "../utils/data"
import styled from "styled-components"

const Topbar = () => {
  return (
    <Wrapper>
      <div className="link-container">
        {linksLeft.map((link) => <a key={link.id} href={link.href}>{link.text}</a>)}
      </div>
      <div className="link-container">
        {linksRight.map((link) => <a key={link.id} href={link.href}>{link.text}</a>)}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  background: rgb(242, 242, 242);
  padding: 0 20px;
  .link-container{
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    justify-content: space-between;
    align-items: center;
    a{
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0px;
      color: #727272;
      text-decoration: none;
    }
  }
`

export default Topbar