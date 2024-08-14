import { useState } from "react"

function Condicional() {

    const [email,setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e) { // Adicione o 'e' como parâmetro
        e.preventDefault()
       setUserEmail(email)
    
    }


    
    function limparEmail(e) { 
       setUserEmail(email)
    
    }

    return (
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email:" onChange={(e) => setEmail (e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>

                {userEmail && (
                    <div>
                        <p>"O email do usuario é : {userEmail}"</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                ) }
            </form>
        </div>
    )
}

export default Condicional