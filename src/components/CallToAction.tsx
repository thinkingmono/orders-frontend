import styled from 'styled-components'


const CallToAction = () => {
  return (
    <Wrapper>
      <p>Regístrate y recibe un 20% de descuento para redimir en tu próxima compra.<br />Además celebramos contigo, en el mes de tu cumpleaños disfruta del 25% de descuento.</p>
      <a href='https://co.totto.com/registro-datos' className='btn'>Suscríbete</a>
      <small>*Los descuentos de registro no son acumulables. Aplican términos y condiciones, consúltalos en: <a href='https://co.totto.com/promociones-vigentes'>https://co.totto.com/promociones-vigentes</a></small>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  row-gap: 30px;
  background: #313131;
  padding: 16px 0;
  p{
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  .btn{
    width: 250px;
    background: #fdc000;
    height: 48px;
    border: none;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  small{
    color: #fff;
    font-family: "Centra No1", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    max-width: 430px;
    a{
      color: #fff;
      font-weight: 400;
    }
  }
`

export default CallToAction