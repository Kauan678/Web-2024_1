<<<<<<< HEAD
const Produto = ({nome,categoria,valor}) => {

    function retornaJson() {
        return {x:40,y:56}
    }
=======
const Produto = ({nome, categoria, valor}) => {

    //let objJSON = {nome:"Jefferson", idade: 18, curso: "Engenharia de Alimentos", notas: {nota1:5,nota2:3}}
    //const {nome, categoria, valor} = props
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888

    return (
        <div>
            {/* <h1>{objJSON.notas.nota1}</h1> */}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: R$ {valor}</h3>
<<<<<<< HEAD
            <h3>{JSON.stringify(retornaJson())}</h3>
=======
>>>>>>> 95288af931f63abab6996522c7105f788d3d2888
        </div>
    )
}

export default Produto