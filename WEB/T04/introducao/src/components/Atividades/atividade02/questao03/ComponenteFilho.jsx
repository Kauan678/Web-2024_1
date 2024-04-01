import React, { useContext } from 'react'
import { MeuContexto } from './MeuContexto'
import Neto from './ComponenteNeto'

const Filho = () => {
  const { contador, incrementarContador } = useContext(MeuContexto)

  return (
    <>
      <h3> Filho: {contador + 10} </h3>
      <button 
        onClick = {incrementarContador}>
        Incrementar Contador
      </button>
      <Neto />
    </>
  )
}

export default Filho