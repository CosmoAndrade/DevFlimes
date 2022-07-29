import axios from "axios";

// Base_url  = https://api.themoviedb.org/3/

// URl da api =  /movie/now_playing?api_key=2dc7925c2af9630e61ec694073a070a0&language=pt-BR&page=1


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"

})


export default api;