import React, {useState,useEffect} from 'react'
import './RowPost.css'
import axiosInstance from '../../axios'
import { IMAGE_URL} from '../../constants/constant'
import YouTube from '../youtube/YouTube'

const RowPost = (props) => {
    console.log(props)
    const [actions, setActions] = useState([])
    useEffect(() => {
        axiosInstance.get(props.url).then((res)=>{
            console.log(res.data.results)
            setActions(res.data.results)
            
        })
    },[props.url])

  
      const[id,setId]=useState('')

      const handleMovie=(id)=>{
            console.log(id)
            setId(id)
      }

      

    return ( <div>
        <div className="row">
            <h className="movie-name">{props.genre}</h>
            <div className="posters" >
           {actions.map((obj)=>{
               return (
                <img onClick={()=>{
                    handleMovie(obj.id)}} src={`${IMAGE_URL+obj.poster_path}`} key={obj.id} alt="poster.png" className={`${props.isSmall? 'small-poster':'poster'}`}/>
           )
           })}
           </div> 
          </div>
          <div className="yt">
               {id&& <YouTube id={id} />}
          </div>
        </div>
        
    )
}

export default RowPost
