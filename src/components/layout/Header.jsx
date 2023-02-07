import styled from 'styled-components'
import { BsWifi2, BsFillLightningChargeFill } from 'react-icons/bs'
import { RiRotateLockFill, RiBatteryLowLine } from 'react-icons/ri'
const Header = () => {
  return (
    <HeaderBox>
      <WifiMenu>
        No Service
        <BsWifi2 size='20' />
      </WifiMenu>
      <div>18:43</div>
      <HeaderList>
        <RiRotateLockFill size='20' />
        11%
        <RiBatteryLowLine size='20' />
        <BsFillLightningChargeFill size='20' />
      </HeaderList>
    </HeaderBox>
  )
}

export default Header

const HeaderBox = styled.div`
  display: grid;
  height: 2vh;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`

const WifiMenu = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: 1fr 1fr;
`

const HeaderList = styled.div`
  display: grid;
  align-items: center;
  justify-content: end;
  grid-template-columns: 1.5rem 2.2rem 1.5rem 1.5rem;
`
