"use client"
import axios from "axios"
import { useState,useEffect } from "react"
import "./style.css"
export default function Dogs(){
        const[ racas ,AlteraRacas ] = useState([]);
        const[ racasimg , AlteraImagem ] = useState([]);
        const[ nome , AlteraNome] = useState([]);



        function buscarRacas(){
            axios.get("https://dog.ceo/api/breeds/list/all")
            .then(function(response){
                AlteraRacas(Object.keys( response.data.message ) );
            })
        }
        


        

        function BuscarImagem(racaCachorro){
            AlteraNome (racaCachorro)

            let url ="https://dog.ceo/api/breed/"+racaCachorro+"/images"

            if( racaCachorro == null){
                url = "https://dog.ceo/api/breeds/image/random/20";
            }
            axios.get(url)
            .then(function(response){
                
                AlteraImagem( response.data.message )
                AlteraNome(racaCachorro)

            })
        }

        useEffect(() =>{
            buscarRacas();
            BuscarImagem();
            
        },[]);
    return(
        <div id="dog" >
            <h1>Paginas dos dogs</h1>

            <p> Consulte e encontre fotos de cachorros </p>
            <div className="layout-central">
                <div class="layout-menu">
                    <ul>
                    <li key="todas-racas" onClick={() => BuscarImagem()}>
                            Todas as Raças
                        </li>
                        {racas.map((raca, index) => {
                            return (
                                <li key={index} onClick={() => BuscarImagem(raca)}>
                                    {raca}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/*Painel de foto dos cachorros*/}
                
                <div>
                
                    <h2>{nome}</h2>
                    <ul/>
                    
                        
                        {racasimg.map((imagem, index) => {
                            return <img key={index} src={imagem} alt={"Imagem " + index} />;
                        })}
                </div>
            </div>

        </div>
    )
}