function Form() {
    // e = event (Evento de submissão)
    function cadastrarUsuario(e) {
        // Irá parar a execução do formulário e executar o que está em seguida
        e.preventDefault();
        console.log("Cadastrou o usuário!");
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario} action="">
                <div>
                    <input type="text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;