import styled from 'styled-components'
import { generalInfoFooter } from '../utils/data'

const GeneralInfo = () => {
  return (
    <Wrapper>
      <section>
        {generalInfoFooter.map((info) => <p key={info.id}>{info.text}</p>)}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #313131;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  section {
    max-width: 1215px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    padding: 6px 0;
    p{
      font-size: 10px;
      font-weight: 400;
      color: #fff;
    }
  }
`

export default GeneralInfo