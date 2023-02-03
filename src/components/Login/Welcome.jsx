import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeBox>
      <h1>Welcome to KakaoTalk</h1>
      <p>
        if you have a Kakao Account,
        <br /> log in with your email or phone number.
      </p>
    </WelcomeBox>
  )
}
// height: 20vh;
// display: grid;
// justify-content: center;
// align-content: space-evenly;
// justify-items: center;
// p {
//   color: grey;
// }
export default Welcome

const WelcomeBox = styled.div``
