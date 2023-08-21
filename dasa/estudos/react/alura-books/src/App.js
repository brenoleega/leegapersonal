import Headers from './componentes/header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components';


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52, #fff);
`

function App() {
  return (
    <AppContainer>
      <Headers/>
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
