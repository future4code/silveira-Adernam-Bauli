import styled from 'styled-components'

export const DivCard = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const DivPost = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const PostContainer = styled.div`
  /* background-color: red; */
  width: 350px;
  height: 240px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`

export const PostBox = styled.textarea`
  background-color: lightgray;
  height: 130px;
  width: 280px;
  border: none;
  border-radius: 10px;
  resize: none;
  padding: 10px;
`

export const ButtonPost = styled.button`
  width: 300px;
  height: 35px;
  border: none;
  border-radius: 10px;
`