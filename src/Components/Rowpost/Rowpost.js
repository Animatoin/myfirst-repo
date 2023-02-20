import React, { useEffect, useState } from "react";
import './Rowpost.css'
import axios from '../axios'
import { imageURL,API_KEY } from "../../Constants/constants";
import YouTube  from "react-youtube";


export default function Rowpost({ title, url }) {
    const [movies, setMovies] = useState([])
    const [videoId,setVideoId]=useState('')
    useEffect(() => {
        axios.get(url).then((response) => {
            setMovies(response.data.results)
        }).catch((err) => {
            alert(err)
        })
    })
    
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick=(id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data)
            if(response.data.results.length!==0){
                let video=response.data.results.filter(obj=> obj.type==='Trailer')
                // console.log(video[0])
                setVideoId(video[0])
            }else{
                console.log("Video  is Not avilable")
            }
        }).catch((err)=>{
            alert(err )
        })
      }
    return (
        <div className='row' >
            <h1>{title}</h1>
            <div className="posters">
                {movies.map((obj, i) =>
                    <img key={i} onClick={()=>handleClick(obj.id)} className={title === "Originals" ? "poster" : "smallposter"} src={`${imageURL + obj.poster_path}`} alt="posters" />
                )}

            </div>
           { videoId && <YouTube videoId={videoId.key} opts={opts}  />}
        </div>
    )
}