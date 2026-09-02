import { Link } from 'react-router'
function ListaFuncionarios() {
   const funcionarios = [
      {
         id: 1,
         nome: 'Jair Messias',
         cpf: '12345678901',
         email: 'jair@email.com',
      },
      {
         id: 2,
         nome: 'Kirk Lima',
         cpf: '23456789012',
         email: 'kirk@email.com',
      },
      {
         id: 3,
         nome: 'Carla Mirella',
         cpf: '34567890123',
         email: 'carla@email.com',
      },
   ]
   return (
      <main className="pagina">
         <h1>Lista de Funcionarios</h1>
         <ul className="lista">
            {funcionarios.map((funcionario) => (
               <li key={funcionario.id}>
                  <strong>{funcionario.nome}</strong>
                  <span>CPF: {funcionario.cpf}</span>
                  <span>E-mail: {funcionario.email}</span>
               </li>
            ))}
         </ul>
         <Link to="/funcionarios">Voltar para Gerenciamento de
            Funcionarios</Link>
      </main>
   )
}

export default ListaFuncionarios