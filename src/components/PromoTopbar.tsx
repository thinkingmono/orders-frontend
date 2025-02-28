import styled from 'styled-components'

const PromoTopbar = () => {
  return (
    <Wrapper>
      <p>
        🧥 Chaquetas para invierno 30% OFF ¡Comprar!
      </p>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background: #000000;
  p{
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
    letter-spacing: 0;
  }
`

export default PromoTopbar