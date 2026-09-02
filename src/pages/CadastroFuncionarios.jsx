import { useState } from 'react'
import { Link } from 'react-router'

function CadastroFuncionarios() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [cnpj, setCnpj] = useState('')
    function cadastrarCliente(evento) {
        evento.preventDefault()
        const novoCliente = {
            nome,
            cpf,
            telefone,
            email,
            cnpj,
        }
        console.log(novoCliente)
        alert('funcionarios cadastrado com sucesso!')
    }
    return (
        <main className="pagina">

            <h1>Cadastrar novo funcionarios</h1>
            <form className="formulario"
                onSubmit={cadastrarCliente}>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    value={nome}
                    onChange={(evento) =>
                        setNome(evento.target.value)}
                    required
                />
                <label htmlFor="cpf">CPF</label>
                <input
                    id="cpf"
                    type="text"
                    value={cpf}
                    onChange={(evento) =>
                        setCpf(evento.target.value)}
                    maxLength="11"
                    required
                />

                <label htmlFor="telefone">Telefone</label>
                <input
                    id="telefone"
                    type="text"
                    value={telefone}
                    onChange={(evento) =>
                        setTelefone(evento.target.value)}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(evento) =>
                        setEmail(evento.target.value)}
                />

                 <label htmlFor="email">CNPJ</label>
                <input
                    id="cnpj"
                    type="text"
                    value={cnpj}
                    onChange={(evento) =>
                        setCnpj(evento.target.value)}
                />
                <button type="submit">Cadastrar funcionarios</button>
            </form>
            <Link to="/Funcionarios">Voltar para Gerenciamento de
                Funcionarios</Link>

        </main>
    )
}
export default CadastroFuncionarios
