import React, {useState, useEffect} from 'react'

function Questao04() {
  // Inicializando os estados para armazenar os dados e possíveis erros
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    // Criando uma promise que retorna um array de dados estáticos
    const fetchData = new Promise((resolve, reject) => {
      const data = [
        { "capital": ["Dublin"], "population": 4994724 },
        { "capital": ["Nicosia"], "population": 1207361 },
        { "capital": ["Madrid"], "population": 47351567 }
      ]
      resolve(data)
    })

    // Usando then e catch para lidar com a promessa
    fetchData
      .then(response => {
        setData(response)
      })
      .catch(error => {
        setError(error)
      })
  })

  // Verificando se houve erro e exibindo a mensagem
  if (error) {
    return (
      <div>
        Erro: {error.message}
      </div>
    )
  }

  // Retornando os dados das capitais
  return (
    <div>
      <h1> Dados das Capitais </h1>
      <ul>
        {data.map((item, index) => (
          <li key = {index}>
            <strong> Capital: </strong> {item.capital.join(', ')} <br />
            <strong> População: </strong> {item.population}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Questao04