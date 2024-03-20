<<<<<<< HEAD
//import Pai from "./components/atividade01/questao01/01Pai"
//import {PlacaMae as PCAMae, Memoria as Mem, PlacaDeVideo as PCAVideo} 
//from "./components/atividade01/questao02/02MeuPC"
import {World} from "./components/atividade01/questao03/03Batalha"
import {Arena} from "./components/atividade01/questao03/03Batalha"

function App() {
  return (
      <div>
        <h1> Desenvolvimento de Software para a WEB!</h1>
        <World />
      </div>
  )
}

/*function App() {
  return (
    <div>
      <h1> Meu PC </h1>
      <PCAMae nome = "Placa Mãe Gamer" preco = "800,00" />
      <Mem nome = "Memória DDR4 16GB" preco = "400,00" />
      <PCAVideo nome = "RTX 3080" preco = "3.500,00" />
    </div>
  )
}*/

/*function App() {
  return (
    <div>
      <Pai/>
    </div>
  )
}*/

=======
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
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888
export default App