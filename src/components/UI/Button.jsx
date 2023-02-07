import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyleButton type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </StyleButton>
  )
}

export default Button

const StyleButton = styled.button`
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
  &:hover {
    background-color: #acb0ad70;

    font-weight: bold;
  }
`
