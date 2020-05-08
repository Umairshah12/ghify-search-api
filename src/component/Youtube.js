import React,{useState,useEffect} from 'react'
import config from "./config"


const Youtube = () => {
    const[item, setItems] = useState([]);


  useEffect(()=>{
      const{api_key,channel_id ,total} = config;
      const api = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channel_id}&maxResults=${total}&key=${api_key}`
      fetch(api).then((resp)=>resp.json()).then((res)=>{
          console.log(res)
        const result = res.items.map((data)=>{
            // console.log(data.statistics.subscriberCount)
           return {subscription:data.statistics.subscriberCount, 
            totalViews:data.statistics.viewCount, 
            videoCount:data.statistics.videoCount,
            thumbnails:data.snippet.thumbnails.medium.url,
          description:data.snippet.description,
        title: data.snippet.title}
           
        })
        // console.log(result)
        setItems(result)
        // console.log(item)
      })
  },[])
    return (
        <div>
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/tsBy6je8KjM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      {
            item.map(dta=>{
              console.log(dta)
              return(
                <>
                <div>
                <img className='ui image' src={dta.thumbnails} alt={dta.description}/>
                </div>
              
                <div>
                  <h2>{dta.title}</h2></div>
                
                <div>
                  <h2>Total subscribers: {dta.subscription}</h2>
                </div>
               <div>
               <h2>Total totalViews: {dta.totalViews}</h2>
             </div>
             <div>
               <h2>Total videoCount: {dta.videoCount}</h2>
             </div>
             </>
              )
            })
          }
        </div>
    )
}

export default Youtube
