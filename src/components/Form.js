
import { useState } from "react"


function Form() {
    // Inicialize o estado com uma string vazia
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    function cadastrarUsuario(e) {
        e.preventDefault();
       console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
       
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name1" 
                        name="name" 
                        placeholder="Digite o seu nome"
                        value={name}  // Associa o valor do input ao estado
                        onChange={(e) => setName(e.target.value)}  // Atualiza o estado conforme o usuário digita
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password1" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;
