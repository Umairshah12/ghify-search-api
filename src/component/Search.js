import React, { useState } from "react";


function Search(props) {
    // console.log(props)
    const [term, setTerm] = useState("")

    function onInputChange(term){
        setTerm(term)
      props.onSearchTermChange(term)
    }
    return (
           <div className="search-bar" style={{margin: "20px", textAlign: "center"}}>
        <input
          value={term}
          onChange={event => onInputChange(event.target.value)}
          style = {{ width: "75%" }}
        />
      </div>
    )
}

export default Search
