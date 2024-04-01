import {useContext} from "react"
import {PokemonContexto} from "./PokemonContext"

const PokemonDecrementar = () => {
    
    const {setId} = useContext(PokemonContexto)
    
    return (
        <div>
            <button
                onClick = {() => setId(anterior => anterior - 1)}
            >
                Decrementar
            </button>
        </div>
    )
}
export default PokemonDecrementar