const FuncoesInternas = () => {
    
    let numero1 = 10
    let numero2 = 3
    let myNumber = 3.14565653

<<<<<<< HEAD
    function somar(x, y){
        return x + y
    }
=======
    const somar = (x, y) => x + y
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888

    /*const subtrair = (x, y) => {
        return x - y
    }*/
    
    const subtrair = (x, y) => x - y

    const multiplicar = (x, y) => x * y
    
<<<<<<< HEAD
    const dividir = (x, y) => {
        return x / y
    }
=======
    const dividir = (x, y) => x / y
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888

    return (
        <div>
            <h1>Calculadora</h1>
            <h3>O resultado da soma é: {somar(numero1, numero2)}</h3>
            <h3>O resultado da subtração é: {subtrair(numero1, numero2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(numero1, numero2)}</h3>
            <h3>O resultado da divisão é: {dividir(numero1, numero2).toFixed(2)}</h3>
            <h2>{myNumber.toFixed(3)}</h2>
        </div>
    )
}

export default FuncoesInternas