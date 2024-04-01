import React, { useContext } from 'react'
import { MeuContexto } from './MeuContexto'

const Neto = () => {
  const { contador } = useContext(MeuContexto)

  return (
    <>
      <h3> Neto: {contador + 20} </h3>
    </>
  )
}

export default Neto