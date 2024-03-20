import Filho from "./01Filho"

const Pai = () => {

    return (
        <div>
          <h1>Componente Pai</h1>
          <Filho altura = {1.80} peso = {90}/>
        </div>
    )
}

export default Pai