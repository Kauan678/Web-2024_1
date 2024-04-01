import myNumber from "./MeuContexto"
import Filho from "./ComponenteFilho"

const Avo = () => {
  const numero = 10
  return (
    <>
    <h3> Avô: {numero} </h3>
    <img 
      src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
      alt = "Pokemon"
      width = {100}
    />
    <myNumber.Provider value = {numero}>
      <Filho/>
    </myNumber.Provider>
    </>
  )
}

export default Avo