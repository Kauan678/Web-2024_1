import React, { createContext, useState } from 'react'

const MeuContexto = createContext()

const MeuProvider = ({ children }) => {
  const [contador, setContador] = useState(0)

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  return (
    <MeuContexto.Provider value = {{ contador, incrementarContador }}>
      {children}
    </MeuContexto.Provider>
  )
}

export { MeuContexto, MeuProvider }