"use client"

import React from "react";

export default function Cabecalho(){

    const [ cliques, alteraCliques ] = React.useState(0);
    const [medidor ,alteraMedidor]= React.useState("Pouco");
    const [cor ,alteraCor]= React.useState("black");
    
    
    function verificamedidor(){
       if (cliques <=9){
        alteraMedidor ("Pouco")
        alteraCor("black")
        
       }
       if (cliques >9){
        alteraMedidor ("Moderado")
        alteraCor("blue")
       }
       if (cliques >20 ){
        alteraMedidor ("Muito!")
        alteraCor("red")
       }
        
    }
    function aumentarCliques(){
        alteraCliques (cliques +1)
        verificamedidor()
    }
    function diminuirCliques(){
        if(cliques > 0 ){
            alteraCliques(cliques - 1)
        }
        verificamedidor()
    }

    return(
        <div>
            <h1 style={{background:"red",color:"white"}}>Aula 02 de React</h1>
            <p>Nesta aula vamos aprender mais sobre componentes e estados</p>
            <p><strong>Componentes:</strong> pedaços de HTML que podem ser injetados em qualquer lugar</p>
            <p><strong>Estados:</strong> usado com variaveis para alterar algo na interface</p>

            <p style={{color:cor}}>Número de cliques: {cliques} Você clicou {medidor}</p>
            <button onClick={()=>aumentarCliques()}>Aumentar número</button>
            <button onClick={()=>diminuirCliques()}>Diminuir número</button>
            <button onClick={()=>alteraCliques( 0 )}>Resetar número</button>
            
            <hr/>
        </div>
    );
}