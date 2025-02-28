import styled from "styled-components"
import { BsBackpack2 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi2";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MainMenu = () => {
  return (
    <Wrapper>
      <div className="search-container">
        <div className="search-input-btn">
          <button type="button" className="search-btn"><FaMagnifyingGlass /></button>
          <input type="text" name="search" id="search" placeholder="¿Qué estás buscando?" />
        </div>
      </div>
      <div className="logo-container">
        <img src="https://tottoco.vtexassets.com/assets/vtex.file-manager-graphql/images/c9b14fa0-2088-46ce-84d3-c346c1b9c3fd___f16e2fcf0b496c8ffb133712770052b1.svg" alt="Logo Totto" className="logo" />
      </div>
      <div className="btn-container">
        <button type="button" className="btn"><HiOutlineUser /></button>
        <button type="button" className="btn"><BsBackpack2 /></button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px 110px 24px;
  border-bottom: 1px solid rgb(221, 221, 221);
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
        min-width: 204px;
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
  .logo-container{
    display: flex;
    justify-content:center;
    align-items: center;
    .logo{
      width: 144px;
      height: 49px;
    }
  }
  .btn-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    column-gap: 20px;
    .btn{
      background: transparent;
      border: none;
      cursor: pointer;
      svg{
        width: 32px;
        height: 32px;
      }
    }
  }
`

export default MainMenu