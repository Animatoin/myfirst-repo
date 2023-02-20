import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from '../axios'
import { API_KEY, imageURL } from "../../Constants/constants";

export default function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {       
        const timer = setInterval(() => {
            axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((respose) => {
                console.log(respose.data.results)
                setMovie(respose.data.results[Math.floor(Math.random() * respose.data.results.length - 1)])
            })
        }, 5000);
        // setInterval(imagePath,15000)
        return () => {
            clearInterval(timer);
        }
    }, []);
    
    function trancate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className="banner"
            style={{ backgroundImage: `url(${movie ? imageURL + movie.backdrop_path : ""})`       
        }}
        >
            <div className="content">
                <h1 className="title">{movie ? movie.title || movie.name : ""}</h1>
                <div className="bannerBtn">
                    <button className="button">Play</button>
                    <button className="button">Mylist</button>
                </div>
                <h1 className="description">{trancate(movie && movie.overview, 150)}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}