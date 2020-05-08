import React,{useState,useEffect} from 'react'


const api_key= "MAjtqyAanGOzW70Wn29IJvZPhLvjZEdE";

function GifySearch() {
const[query,setQuery]=useState("");
const[search,setSearch]=useState("");
const[result,setResult] =useState([])



useEffect(()=>{
async function fetchData(){
 try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=19&offset=0&rating=G&lang=en`);
    const json = await response.json();
    // console.log({json});
    setResult(
        json.data.map(item=>{
            return item.images.preview.mp4;
        })
    )
 } catch (error) {
     console.log(error)
 }

}
if(query !== ""){
    fetchData();
}
},[query])

    return (
        <div>
            <h1>Asyn Await Function </h1>
            <form onSubmit={e=>{
                e.preventDefault();
                setQuery(search)}}>
                <input type="text"
                value={search} 
                placeholder="search for gif"
                onChange={e=>setSearch(e.target.value)}/>
                <button type="submit">Search</button>
               
            </form>
            <br/>
                {
                    result.map(item=>{
             return (
                <video key={item} src={item} type="video/mp4" />
             )
                    })
                }
        </div>
    )
}

export default GifySearch
