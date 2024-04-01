import React from 'react'
import { MeuProvider } from './MeuContexto'
import Filho from './ComponenteFilho'

const Avo = () => {
  return (
    <MeuProvider>
      <Filho />
    </MeuProvider>
  )
}

export default Avo