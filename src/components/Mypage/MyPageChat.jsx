import React from 'react'

import styled from 'styled-components'

const MyPageChat = (props) => {
  return props.users.map((user) => (
    <ChatBox key={user.id}>
      <ImgIcon>{user.img}</ImgIcon>
      <Name>{user.name}</Name>
      <TalkLastTime>{user.lastTime}</TalkLastTime>

      <TalkLastChat>{user.lastChat}</TalkLastChat>
      <UnReadMsgNum>{user.unreadMsg}</UnReadMsgNum>
    </ChatBox>
  ))
}

export default MyPageChat

const ChatBox = styled.div`
  display: grid;
  width: 100%;
  justify-items: start;
  grid-template-columns: 1fr 4fr 1fr;
  height: auto;
  align-items: center;
  ul {
    list-style: none;
  }
`

const ImgIcon = styled.div`
  grid-row: 1 / span 2;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #f7e600;
  border-radius: 25px;
  width: 4rem;
  height: 4rem;
`

const TalkLastTime = styled.div`
  color: gray;
  vertical-align: center;
`

const TalkLastChat = styled.div`
  color: gray;
  font-size: 1.2rem;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
`

const UnReadMsgNum = styled.div`
  display: grid;
  background-color: red;
  color: white;
  width: 2rem;
  border-radius: 50px;

  height: 2rem;
  align-items: center;
  justify-items: center;
`
