import React, {useState, useEffect} from 'react'

const Questao03 = () => {
  // Inicializando os estados para armazenar as capitais com maior e menor população
  const [capitalMaiorPop, setCapitalMaiorPop] = useState("")
  const [capitalMenorPop, setCapitalMenorPop] = useState("")

  // Utilizando o useEffect para fazer a requisição dos dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        // Convertendo a resposta da requisição para um arquivo JSON
        const dados = await response.json()

        // Inicializando as variáveis para armazenar os valores máximos e mínimos
        // utilizando Infinity e -Infinity para fazer a comparação e dizer se é maior ou menor
        // e as variáveis que irão armazenar as capitais com maior e menor população
        let maiorPopulacao = -Infinity
        let menorPopulacao = Infinity
        let capitalMaior = ""
        let capitalMenor = ""

        // Loop para encontrar as capitais com maior e menor população
        dados.forEach((country) => {
          if (country.population > maiorPopulacao) {
            maiorPopulacao = country.population
            capitalMaior = country.capital[0]
          }
          if (country.population < menorPopulacao) {
            menorPopulacao = country.population
            capitalMenor = country.capital[0]
          }
        })

        // Atualizando os estados com as capitais encontradas 
        setCapitalMaiorPop(capitalMaior)
        setCapitalMenorPop(capitalMenor)
      // Tratamento de erros
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }
  )
  // Retornando as capitais com maior e menor população
  return (
    <div>
      <h2>Capital com Maior População: {capitalMaiorPop}</h2>
      <h2>Capital com Menor População: {capitalMenorPop}</h2>
    </div>
  )
}

export default Questao03