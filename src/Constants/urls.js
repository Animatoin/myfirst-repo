import { API_KEY } from "./constants"
const categories = {
    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    tranding:`/trending/all/day?api_key=${API_KEY}`,
    action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    animation:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    comedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    crime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fantasy:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    horror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    mystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    adventure:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    

}

// const movieId=`/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`
export default categories