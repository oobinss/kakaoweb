import styled from 'styled-components'
import Button from './Button'
const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onClick} />
      <ModalDiv>
        <ModalHeader>
          <h2>{props.title}</h2>
        </ModalHeader>
        <ModalContent>
          <p>{props.message}</p>
        </ModalContent>
        <ModalFooter>
          <Button onClick={props.onClick}>확인</Button>
        </ModalFooter>
      </ModalDiv>
    </div>
  )
}

export default ErrorModal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

const ModalDiv = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  background: #f7e600;
`

const ModalHeader = styled.header`
  padding: 1rem;

  h2 {
    margin: 0;
  }
`

const ModalContent = styled.div`
  padding: 1rem;
`

const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`
