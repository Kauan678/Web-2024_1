import Produto from "./Produto" 

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto nome="Máquina de Lavar" categoria="Eletrodoméstico" valor={2300}/>
            <hr />
            <Produto 
                nome="Senhor dos Anéias - A Sociedade do Anel" 
                categoria="Livro" 
                valor={55}
            />
<<<<<<< HEAD
            <hr />s
=======
            <hr />
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888
            <Produto nome="Pizza de Calabresa" categoria="Alimentação" valor={16.99}/>
        </div>
    )
}

export default Loja