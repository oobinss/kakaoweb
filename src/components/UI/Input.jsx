import React, { useRef } from 'react'

import styled from 'styled-components'

const Input = React.forwardRef((props, ref) => {
  return (
    <InputBox>
      <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        required={props.required}
        minLength={props.minLength}
        onFocus={props.onFocus}
        onChange={props.onChange}
        ref={ref}
        onBlur={props.onBlur}
      ></input>
    </InputBox>
  )
})

export default Input

const InputBox = styled.div`
  margin-bottom: 3rem;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 1.5rem;
    height: 3rem;
    cursor: pointer;
  }
  input:hover {
    border-bottom: 5px solid gray;
  }
  input:focus {
    outline: none;
    border-bottom: 5px solid gray;
  }
`
const InputLabel = styled.label`
  display: grid;
  width: 100%;
  font-size: 1.5rem;
  color: gray;
  justify-content: start;
  position: relative;
  height: 0px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`
