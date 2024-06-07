import "./style.css"
import Link from "next/link";

export default function Login(){
    return(
        <div id="login">
            <div className="bg-stone-400 text-stone-50">
            <h1>Página de Login</h1>
            < Link className="text-sky-800" href="./">Voltar para Home</Link> 
            </div>
        </div>
    )
}