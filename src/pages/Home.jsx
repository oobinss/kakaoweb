import React, { useContext } from 'react'
import Header from '../components/layout/Header'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMusicalNote } from 'react-icons/hi2'
import { BsChatDots, BsPerson, BsChatFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { RiKakaoTalkFill } from 'react-icons/ri'
import styled from 'styled-components'
import MaPageChat from '../components/Mypage/MyPageChat'

import FormContext from '../store/context'

const MyPage = () => {
  const data = [
    {
      id: 1,
      img: <RiKakaoTalkFill size='45' />,
      name: 'kakao',
      lastChat: 'Please check My Kakao Account info',
      lastTime: '3:30',
      unreadMsg: 1,
    },
  ]

  return (
    <HomeBox>
      <Header />

      <MenuNav>
        <HomeTitle>Chats</HomeTitle>
        <BiSearch size='25' />
        <BsChatDots size='25' />
        <HiOutlineMusicalNote size='25' />
        <AiOutlineSetting size='25' />
      </MenuNav>

      <ChatBox>
        <MaPageChat users={data} />
      </ChatBox>

      <MyBox>
        <BsPerson size='30' />
        <AfterBox>
          <BsChatFill size='30' />
        </AfterBox>
        <BiSearch size='30' />
        <AddMenu>
          <BsThreeDots size='30' />
        </AddMenu>
      </MyBox>
    </HomeBox>
  )
}

export default MyPage

const HomeBox = styled.div`
  display: grid;
  margin: 3rem auto;
  width: 95%;
  max-width: 35rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 0 1rem;
  text-align: center;
  height: 60vh;
`

const MenuNav = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 1fr 1fr 1fr 1fr;
  justify-items: start;

  height: 5vh;
  justify-self: start;
  align-items: center;
`
const ChatBox = styled.main`
  display: grid;
  height: 45vh;
  align-content: start;
`
const HomeTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`

const MyBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: end
  align-content: end;
  height: 3vh;
  justify-items: center;
  align-content: center;
  align-items: end;
`
const AfterBox = styled.div`
  display: grid;
  grid-template-rows: 100% 0%;
  align-items: end;
  &:after {
    content: '1';
    background-color: red;
    color: white;
    margin-left: 10px;
    display: grid;
    border-radius: 50px;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    top: -1rem;
    left: 0.7rem;
  }
`
const AddMenu = styled.div`
  display: grid;
  grid-template-rows: 100%;
  align-items: end;
  &:after {
    content: '';
    background-color: red;
    color: white;
    margin-left: 10px;
    display: grid;
    border-radius: 50px;
    position: relative;
    width: 0.3rem;
    height: 0.3rem;
    top: -1.7rem;
    left: 1rem;
  }
`
