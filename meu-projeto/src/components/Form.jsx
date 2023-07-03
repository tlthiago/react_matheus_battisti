import { useState } from 'react';

function Form() {
    // e = event (Evento de submissão)
    function cadastrarUsuario(e) {
        // Irá parar a execução do formulário e executar o que está em seguida
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario} action="">
                <div>
                    <label htmlFor="Nome">Nome: </label>
                    <input  
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite o seu nome" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;