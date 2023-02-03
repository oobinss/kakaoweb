import styled from 'styled-components'
import { BsWifi2, BsFillLightningChargeFill } from 'react-icons/bs'
import { RiRotateLockFill, RiBatteryLowLine } from 'react-icons/ri'
const Header = () => {
  return (
    <HeaderBox>
      <HeaderUl>
        <li>
          No Service
          <BsWifi2 />
        </li>
        <li>18:43</li>
        <li>
          <RiRotateLockFill />
          11%
          <RiBatteryLowLine />
          <BsFillLightningChargeFill />
        </li>
      </HeaderUl>
    </HeaderBox>
  )
}

// const HeaderBox = styled.div`
//   height: 2vh;
//   width: 100%;
//   justify-content: row;
// `

// const HeaderUl = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   list-style: none;
// `
export default Header

const HeaderBox = styled.div`
  display: grid;
  height: 2vh;
  width: 100%;
`

const HeaderUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  justify-items: center;
`
