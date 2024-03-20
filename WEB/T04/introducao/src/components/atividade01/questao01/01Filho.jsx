const Filho = ({altura, peso}) => {

    const CalculaIMC = () => {
        let IMC = (peso/(altura*altura))
        return IMC.toFixed(2)
    }

    const exibirMensagemIMC = () => {
      let IMC = CalculaIMC()
      if (IMC < 18) {
        return "Abaixo do peso"
      } else if (IMC > 25) {
        return "Acima do peso"
      } else {
        return "Peso Ideal"
      }
    }

    return (
        <div>
          <h2>IMC calculado pelo Filho: </h2>
          <p>Altura: {altura}m </p>
          <p>Peso: {peso}kg </p>
          <p>IMC: {CalculaIMC()}</p>
          <p>Status: {exibirMensagemIMC()}</p>
        </div>    
    )
}

export default Filho