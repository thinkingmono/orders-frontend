import styled from 'styled-components'
import { aboutUsLinks, categoriesLinks, serviceLinks, teamLinks } from '../utils/data'
import { HiChevronDown } from "react-icons/hi2";
import { FooterNav } from './'

export type FooterNavLink = {
  id: number
  text: string
  href: string
}

const MainArea = () => {
  return (
    <Wrapper>
      <FooterNav title={"Servicio al Cliente"} links={serviceLinks} />
      <FooterNav title={"Se Parte de Totto"} links={teamLinks} />
      <FooterNav title={"Nosotros"} links={aboutUsLinks} />
      <FooterNav title={"Categorías"} links={categoriesLinks} />
      <div className='country-selector'>
        <div>
          <p>Colombia<img src="https://tottoco.vtexassets.com/arquivos/colombiaIcon.png" alt="Bandera Colombia" /></p>
        </div>
        <HiChevronDown />
      </div>
      <div className='payment-methods'>
        <h3 style={{ gridColumn: 1 / 4 }}>Medios de Pago</h3>
        <img src="https://tottoco.vtexassets.com/arquivos/pse.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/mastercard.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/visa.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/americanexpress.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/dinersclub.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/efecty.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/creditofacil.png" alt="" /><img src="https://tottoco.vtexassets.com/arquivos/sistecredito.png" alt="" /><img src="https://tottoco.vteximg.com.br/arquivos/addione.png" alt="" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  padding: 40px 35px 60px 54px;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: center;
  column-gap: 80px;
  .country-selector{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    column-gap: 20px;
    cursor: pointer;
    p{
      margin: 0;
      color: #000000;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20.8px;
      display: flex;
      flex-direction: row;
      align-items: center;
      column-gap: 10px;
    }
  }
  .payment-methods{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    row-gap: 15px;
    h3{
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 600;
    }
    img{
      height: 24px;
      widht: auto;
    }
  }
`

export default MainArea