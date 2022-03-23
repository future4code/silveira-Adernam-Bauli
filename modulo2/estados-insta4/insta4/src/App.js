import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post2
          nomeUsuario={'Adernam F. Bauli'}
          fotoUsuario={'https://scontent.fafl1-1.fna.fbcdn.net/v/t1.6435-9/60160426_2186909051423738_8735415983402909696_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3qt9zuFNqmEAX_bypGC&_nc_ht=scontent.fafl1-1.fna&oh=00_AT_rV6gMD_Y8anwtwzE28VO60DXzIKd1m-wwFQvFpeB2Ag&oe=62619FD3'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post3
          nomeUsuario={'jububanz'}
          fotoUsuario={'https://scontent.fafl1-1.fna.fbcdn.net/v/t39.30808-6/277103058_1854992588025971_5188308316503462494_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zIESTIcwOZYAX9o_wq6&_nc_ht=scontent.fafl1-1.fna&oh=00_AT89MDY7XDSSuVUQEnqmSfuMQ-ZC__DuRf74wzVqCRkj7w&oe=62405860'}
          fotoPost={'https://picsum.photos/200/153'}
        />
      </MainContainer>
    );
  }
}

export default App;
