//imprima o nome do curso e pelo menos 3 disciplinas
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