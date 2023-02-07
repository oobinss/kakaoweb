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

export default Welcome

const WelcomeBox = styled.div``
