import React, { useState } from 'react'
import Header from '../components/layout/Header'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMusicalNote } from 'react-icons/hi2'
import { BsChatDots, BsPerson, BsChatFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import styled from 'styled-components'
import MaPageChat from '../components/Mypage/MyPageChat'

const MyPage = () => {
  const data = [
    {
      id: 1,
      img: 3,
      name: 'kakao',
      lastChat: 'hi my name is kakao',
      lastTime: '3:30',
      unreadNum: 1,
    },
    {
      id: 2,
      img: 4,
      name: 'kakao3',
      lastChat: 'hi my name is kakao5',
      lastTime: '3:40',
      unreadNum: 2,
    },
  ]

  return (
    <HomeBox>
      <Header />
      <MenuBox>
        Chats
        <BiSearch />
        <BsChatDots />
        <HiOutlineMusicalNote />
        <AiOutlineSetting />
      </MenuBox>
      <MaPageChat users={data} />
      <MyBox>
        <BsPerson />
        <BsChatFill />
        <BiSearch />
        <BsThreeDots />
      </MyBox>
    </HomeBox>
  )
}

export default MyPage

const HomeBox = styled.div`
  display: grid;
  align-content: space-between;
  margin: 3rem auto;
  width: 95%;
  max-width: 35rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
  height: 50vh;
`

const MenuBox = styled.div`
  border: 1px solid red;
  display: grid;
  width: 100%;
  grid-template-columns: 7fr 1fr 1fr 1fr 1fr;
  justify-items: start;
  align-items: center;
`

const MyBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 1px solid red;
`
