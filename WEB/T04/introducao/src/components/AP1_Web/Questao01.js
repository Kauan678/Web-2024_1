const Questao01A = () => {

  const listaJSON = [
      {a:10, b:3, c: 7},
      {a:5, b:-3, c: 9},
      {a:1, b:9, c: 40}
  ]

  // retornando o componente Questao01B passando a listaJSON como propriedade
  return (
      <div>
          <Questao01B listaJSON = {listaJSON} />
      </div>
  )
}

function Questao01B(props) {
  // recebendo a listaJSON como propriedade
  const {listaJSON} = props
  // função para calcular os maiores números
  const calcularMaioresNumeros = () => {
      // criando um array para armazenar os maiores números
      let maioresNumeros = []
      for (let i=0; i<listaJSON.length; i++){
          if (listaJSON[i].a>listaJSON[i].b && listaJSON[i].a>listaJSON[i].c) 
            maioresNumeros[i] = listaJSON[i].a
          else if (listaJSON[i].b>listaJSON[i].a && listaJSON[i].b>listaJSON[i].c)              maioresNumeros[i] = listaJSON[i].b
          else maioresNumeros[i] = listaJSON[i].c
      }
      // retorna os maiores números após a comparação
      return maioresNumeros
  }

  // função para exibir os maiores números
  const exibirMaioresNumeros = () =>{
      
      // chamando a função calcularMaioresNumeros
      let maioresNumeros = calcularMaioresNumeros()

      // retornando os maiores números
      return (
          <div>
              <h1>Maiores: {maioresNumeros[0]}, {maioresNumeros[1]}, {maioresNumeros[2]}</h1>
          </div>
      )
  }

  // retornando os maiores números e exibindo-os na tela
  return (
      <div>
          {exibirMaioresNumeros()}
      </div>
  )
}

export default Questao01A