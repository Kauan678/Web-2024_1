import ComFilho from "./ComFilho"

const ComPai = () => {

    function receberMensagemDoFilho(mensagem){
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        <div>
            <ComFilho 
                mensagem = "Oi filho"  
                enviarMensagemParaOPai =  {receberMensagemDoFilho}
            />            
        </div>
    )
}

export default ComPai