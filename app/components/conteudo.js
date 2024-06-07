import Lista from "./lista";



export default function Conteudo(){
    return(
        <div style={{background:"black", color:"white"}}>
            <h2 style={{color:"yellow"}}>Conteúdo da UC 15</h2>
            
            
            
            <Lista style={{color:"green"}} titulo="para Front-end" item1="HTML" item2="CSS" item3="React"/>
            
            <Lista style={{color:"orange"}} titulo="Para Back-end e APIs" item1="Nest" item2="Axios" item3="JavaScript"/>
            
            <hr/>
        </div>
    );
}