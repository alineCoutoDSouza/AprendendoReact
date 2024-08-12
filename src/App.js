import './App.css';
import SayMyName from './components/SayMyNane';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = 'Maria'


  return (
    
  <div className="App">
    <h1>testando css</h1>
    <Frase/>
    <Frase/>
    <SayMyName  nome = 'Aline' />
    <SayMyName nome = {nome}/>
    <Pessoa 
    nome = 'Alice' 
    idade='22' 
    profissao= 'Programador' 
    foto = 'https://via.placeholder.com/150'
    />
    <List/>
  </div>
  );
}

export default App;
