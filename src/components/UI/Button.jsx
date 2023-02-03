import styled from 'styled-components'

const Button = (props) => {
  return (
    <StyleButton type={props.type || 'button'}>{props.children}</StyleButton>
  )
}

export default Button

const StyleButton = styled.button`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  font-size: 1.5rem;
`
