import { useContext } from "react"
import myNumber from "./MeuContexto"

const Neto = () => {
  
  const numero = useContext(myNumber)

  return (
    <>
    <h3> Neto: {numero + 20} </h3>
    <img 
      src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 20}.png`}
      alt = "Pokemon"
      width = {100}
    />
    </>
  )
}

export default Neto