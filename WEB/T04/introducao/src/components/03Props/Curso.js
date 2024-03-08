//imprima o nome do curso e pelo menos 3 disciplinas
const Curso = ({nome}, {disciplina1}, {disciplina2}, {disciplina3}) => {
    return (
      <div>
        <h1>Exemplo do curso</h1>
        <hr/>
        <h3>Nome: {nome}</h3>
        <h3>Disciplina: {disciplina1}</h3>
        <h3>Disciplina: {disciplina2}</h3>
        <h3>Disciplina: {disciplina3}</h3>
      </div>
    )
}