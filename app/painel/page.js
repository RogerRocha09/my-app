export default function Painel(){
    const usuarios =[
        {
            id: 0,
            nome: "Pedrim",
            idade: 92
        },
   
    
        {
            id: 1,
            nome: "Maria",
            idade: 29
        },
    
        {
            id: 2,
            nome: "Danilo",
            idade: 24
        }
    ];
    const produtos =[
        {
            id: 0,
            produto: "Blusa",
            estoque: 59,
            preco: " 229,9"
         },
       
        
        {
            id: 1,
            produto: "Calça",
            estoque: 15,
            preco: " 159,9"
        },
        
        {
            id: 2,
            produto: "Sapato",
            estoque: 85,
            preco: " 99,9"
        },

        {
            id: 3,
            produto: "Chinelo",
            estoque: 20,
            preco: " 29,9"
        }
        
    ];
    return(
        <div>
            <h1>Painel do Administrador</h1>
            <hr/>
            <h2>Lista de Usuario:</h2>
            <ul>
            {usuarios.map(u => (
                    <li key={u.id}>
                        Nome: {u.nome}, idade: {u.idade} anos
                    </li>
                ))}
            </ul>

            
            <hr/>
            <h2>Lista de Produtos:</h2>
            <ul>
            {produtos.map(p => (
                    <li key={p.id}>
                        <p>{p.produto}</p>
                        <p>R${p.preco}</p>
                        {p.estoque > 0 ?
                            <p>{p.estoque} disponíveis - <button>Comprar</button></p>
                            :
                            <p>Produto fora de estoque</p>
                        }
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>



        
    )
}