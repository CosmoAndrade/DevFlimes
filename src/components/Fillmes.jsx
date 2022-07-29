import { useState, useEffect } from "react";
import api from '../services/api'
import './index.css'


const Filmes = () => {


    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadFilmes() {

            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "2dc7925c2af9630e61ec694073a070a0",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0, 15))


        }

        loadFilmes()

    }, [])


    return (
        <div className= " mt-4">

            <h1 >DevFlix</h1>
            
            

            {filmes.map((filme) => {
                return (

                    <div className="container">
                       
                        <img src={`http://image.tmdb.org/t/p/original/${filme.backdrop_path}`}  />
                       
                      
                        <h2>
                            {filme.title}
                        </h2>
                        <p>
                        {filme.overview}
                        </p>
                    </div>

                )
            })}

        </div>
    );
}
 
export default Filmes;