import Items from "./items";

const Produtos = (props) => {
    return ( 
        <div className="fundoBlue">
            <h1>Produtos disponíveis</h1>
            
            <Items conteudo=" 📚 Livro de programação" preco="R$ 29,90" />
            <Items conteudo=" 😎 Curso de JavaScript" preco="R$ 99,90" />
            <Items conteudo=" 🖱 Mouse gamer enferrujado" preco="R$ 150,00" />
            
            
            
            <hr/>
        </div>
     );
}
 
export default Produtos;