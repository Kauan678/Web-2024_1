import myNumber from "./MeuContexto"
import Neto from "./ComponenteNeto"
import { useContext } from "react"

const Filho = () => {

  const numero = useContext(myNumber)

  return (
    <>
    <h3> Filho: {numero + 10} </h3>
    <img 
      src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 10}.png`}
      alt = "Pokemon"
      width = {100}
    />
    <Neto/>
    </>
  )
}

export default Filho