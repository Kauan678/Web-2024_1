//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
import Curso from "./components/03Props/Curso";
//import MeusDados from "./components/01MeusDados";
//import MeusDados from "./components/02MeusDados";
//import Temperatura from "./components/03temperatura";
/*function App() {
  return (
    <div>
      <h1>Questão 1 da atividade 00 de Web 2024.1</h1>
      <hr/>
        <MeusDados  
          nome = "Kauan Oliveira Perdigão Lopes" 
          curso = "Sistemas de Informação"
          universidade = "UFC"
        />
    </div>
  )
}*/
/*function App() {
  return (
    <div>
      <h1>Questão 2 da atividade 00 de Web 2024.1</h1>
      <hr/>
      <MeusDados  
        nome = "Kauan Oliveira Perdigão Lopes" 
        curso = "Sistemas de Informação"
        universidade = "UFC"
        />
    </div>
  )
}*/
/*function App() {
  return (
    <div>
      <h1>Questão 3 da atividade 00 de Web 2024.1</h1>
        <Temperatura c = {40} f = {40} k = {40}/>
    </div>
  )
}*/
function App() {
  return (
    <div>
      <Curso
        nome = "Sistemas de Informação"
        disciplina1 = "Matemática"
        disciplina2 = "Cálculo"
        disciplina3 = "Lógica"/>
    </div>
  )
}
export default App