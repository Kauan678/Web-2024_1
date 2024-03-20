//nome, código da disciplina, créditos, período
const Disciplina = ({nome, cod, credito, periodo}) => {

  return(
    <div>
      <h3>
        Nome da disciplina: {nome}
      </h3>
      <h3>
        Código da disciplina: {cod}
      </h3>
      <h3>
        Quantidade de créditos: {credito}
      </h3>
      <h3>
        Período da disciplina: {periodo}
      </h3>
    </div>
  )
  
}

export default Disciplina