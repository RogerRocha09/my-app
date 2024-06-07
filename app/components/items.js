const Items = (props) => {
    return ( 
        <div>
            <p><strong>{props.conteudo}</strong> <br/><p> Preço: {props.preco} <button>Comprar</button></p></p>
        </div>
     );
}
 
export default Items;