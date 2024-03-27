import estilos from './Filme.module.css'
import { Star } from '@phosphor-icons/react'
import {Card} from "./Card";

export function Filme(props) {
    return(
        <Card>
            <figure className={estilos.conteiner}>
                <img src={`https://image.tmdb.org/t/p/w400/${props.filme.poster_path}`}/>
                <figcaption className={estilos.titulo}>{props.filme.title}</figcaption>
                <p className={estilos.descricao}>{props.filme.overview}</p>
                <p className={estilos.avaliacao}>
                    <Star 
                        className={estilos.icone}
                        size={18} 
                        color='#ffee32' 
                        weight='fill' 
                    />
                    {props.filme.vote_average}
                </p>
            </figure>
        </Card>
    );
    
}