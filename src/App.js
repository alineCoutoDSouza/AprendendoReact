import logo from './logo.svg'; 
import './App.css';
import HelloWord from './components/HelloWord';


function App() {

const name = "Alininha"
const newname = name.toUpperCase()

function sum(a,b){
  return a+b
}

const url  = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h2>Alterando o meu jsx</h2>
    <p>Ola, {newname}</p>
    <p>soma: {sum(2,2)}</p>
    <img src={url} alt="Minha imagem" />
    <HelloWord/>
    </div>
  );
}

export default App;
