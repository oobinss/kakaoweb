import styled from 'styled-components'
import Button from '../UI/Button'
const Footer = () => {
  return <FindPasswordButton>Find Kakao Account or Password</FindPasswordButton>
}

export default Footer

const FindPasswordButton = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
  height: 1rem;
  &:hover {
    font-weight: bold;
  }
`
