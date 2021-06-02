import React, {useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import {API_KEY} from '../../constants/constant'
import axiosInstance from '../../axios'


const YouTube = (props) => {
    console.log(props.id)
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const[id,setId] = useState(props.id)

      const[urlId,setUrlId] =useState([])
      const babu=urlId
      console.log(babu)

   useEffect(() => {
       axiosInstance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        setUrlId(...urlId,response.data.results[0].key)

        
    })
   }, [id])
            
           
      
    return (
        <div>
           {urlId && <Youtube videoId={babu} opts={opts} /> }
        </div>
    )
}

export default YouTube
