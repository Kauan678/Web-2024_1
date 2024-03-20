//imprima o nome do curso e pelo menos 3 disciplinas
<<<<<<< HEAD
import Disciplina from "./Disciplina";
const Curso = () => {
  return(
    <div>
      <h1>Cursos UFC Quixadá</h1>
      <hr/>
      <Disciplina nome="Computação em nuvem" cod="35" credito={4} periodo="Vespertino"></Disciplina>
    </div>
  )
}

export default Curso
=======
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
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888
