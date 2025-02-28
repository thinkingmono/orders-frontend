import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { querierHeaders } from '../utils/data';

// const url = import.meta.env.VITE_LOCAL_SERVER_URL;
const url = import.meta.env.VITE_CLOUD_SERVER_URL;

type OrderInfo = {
  creationDate: string
  orderId: string
  firstName: string
  lastName: string
  documentType: string
  document: string
  total: number
  status: string
}

const OrderQuerier = () => {
  const [orderToLookFor, setOrderToLookFor] = useState('1439020519386-01');
  const [orderInfo, setOrderInfo] = useState<OrderInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [fecthError, setFecthError] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderToLookFor(e.target.value);
  }

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(`${url}/${orderToLookFor}`);
      const data = response.data;
      setOrderInfo({ ...data });
    } catch (error) {
      setIsError(true);
      const msg = error instanceof Error ? error.message : 'Hubo un error, intente de nuevo más tarde...';
      setFecthError(msg);
      console.error(`There has been an error: ${msg}`)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <Wrapper>
      <section className='order-querier-container'>
        <div>
          <h1>Consulta tu orden</h1>
        </div>
        <div className="search-container">
          <div className="search-input-btn">
            <input type="text" name="search" id="search" placeholder="Ingresa el número de tu orden" value={orderToLookFor} onChange={handleInputChange} />
            <button type="button" className="search-btn" onClick={fetchData}><FaMagnifyingGlass /></button>
          </div>
        </div>
        {isLoading && <h3>Buscando...</h3>}
        {isError && <h3>{fecthError}</h3>}
        {!isLoading && !isError && (
          <table>
            <thead>
              <tr>
                {querierHeaders.map((querierHeader) => <th key={querierHeader.id}>{querierHeader.text}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr><td>{orderInfo?.creationDate}</td><td>{orderInfo?.orderId}</td><td>{orderInfo?.firstName}</td><td>{orderInfo?.lastName}</td><td>{orderInfo?.documentType}</td><td>{orderInfo?.document}</td><td>{orderInfo?.total}</td><td>{orderInfo?.status.replace(/-/g, ' ')}</td></tr>
            </tbody>
          </table>
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0 100px;
  margin: 0 auto;
  .order-querier-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    .search-container{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .search-input-btn{
        border-bottom: 1px solid #000;
        .search-btn{
          background: transparent;
          border: none;
          width: 60px;
          cursor: pointer;
          svg{
            width: 16px;
            height: 16px;
          }
        }
        input[type=text]{
          font-family: Centra No1, sans-serif;
          font-weight: 600;
          min-width: 300px;
          font-size: 14px;
          border: none;
          padding: 12px 5px;
        }
        input[type=text]::placeholder{
          color: #000;
        }
        input[type=text]:focus{
          outline: none;
        }
      }
    }
    table{
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      th, td {
        padding: 5px;
        text-align: center;
        text-transform: capitalize;
        border: 1px solid #000;
      }
    }
  }
`

export default OrderQuerier