import React from 'react'

import styled from 'styled-components'

const MyPageChat = (props) => {
  return props.users.map((user) => (
    <ChatBox key={user.id}>
      <GridItem>{user.img}</GridItem>
      <div>{user.name}</div>
      <div>{user.lastChat}</div>
      <div>{user.lastTime}</div>
      <div>{user.unreadNum}</div>
    </ChatBox>
  ))
}

export default MyPageChat

const ChatBox = styled.div`
  border: 1px solid red;
  display: grid;
  width: 100%;

  grid-template-columns: 1fr 3fr 1fr;

  ul {
    list-style: none;
  }
`

const GridItem = styled.div`
  grid-row: 1 / span 2;
  display: grid;
  align-items: center;
`
