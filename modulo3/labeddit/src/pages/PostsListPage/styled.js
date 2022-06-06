import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
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

export const InputTitle = styled.input`
  background-color: lightgray;
  width: 277px;
  height: 28px;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
  margin: 5px 0;
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