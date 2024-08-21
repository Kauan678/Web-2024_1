import {useState} from "react"
import React from "react" 

const Questao02 = () => {
    // Inicializando o estado virar com false
    const [virar, setVirar] = useState(false)
    const urlPikachuFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const urlPikachuCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    // Função que verifica e altera o estado da variável "virar" caso esteja de costas ou frente
    const estadoVariavel = () => {
        setVirar(!virar)
    }

    // Tag h1 para o título
    // Tag img para a imagem do Pikachu
    // Tag button para o botão que altera o estado da variável virar
    return (
        <div>
            <h1> Pikachu </h1>
            <img src = {virar ? urlPikachuCostas : urlPikachuFrente} 
                 alt = "Pikachu" />
            <button 
                onClick = {
                  estadoVariavel
                }>
                  Virar
            </button>
        </div>
    )
}

export default Questao02