import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axiosInstance from '../../axios'
import {API_KEY,IMAGE_URL} from '../../constants/constant'


const Banner = () => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axiosInstance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[0])
            const response = res.data.results[Math.floor(Math.random()*res.data.results.length)]    
            setMovie(response)
            console.log(response)
        })
    }, [])

    
    return (
        <div className="banner" style={{backgroundImage: `url(${movie?IMAGE_URL+movie.backdrop_path:''})`}}>
            <div className="content">
                <div className="title">
                    <h2>{movie?movie.title? movie.title:movie.name:''}</h2>
                </div>
                <div className="banner-buttons">
                    <button className="button">Play</button>
                    <button className="button button-mylist">My list</button>
                </div>
                <div className="description">{movie? movie.overview:''}</div>
            </div>
            <div className="fade-bottom"></div>
        </div>
        
    )
}

export default Banner
