import styled from 'styled-components';


export const PostCardContainer = styled.div`
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px;
  padding: 0 10px;
`

export const DivBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Votes = styled.div`
  width: 60px;
  height: 20px;
  border: solid black 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
    

  img{
    width: 20px;
  }
`