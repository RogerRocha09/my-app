const Items = (props) => {
    return ( 
        <div>
            <p><strong>{props.conteudo}</strong> <br/> Preço: {props.preco} <button>Comprar</button></p>
        </div>
     );
}
 
export default Items;