import React from "react";
import "./App.css";
// import Youtube from './component/Youtube';
// import Search from "./component/Search";
// import VedioDetail from "./component/VedioDetail";
// import VedioList from "./component/VedioList";
// import YTSearch from "youtube-api-search";
// // import config from './component/config';
// import _ from 'underscore';
import GifySearch from "./component/GifySearch";

// const api_Key = "AIzaSyCISl_taNs2MuhN1_KqFTYdFosTUcJB03Q";
//
function App() {
  // const [vedio, setVedio] = useState([]);
  // const [selectedVedio, setSelectedVedio] = useState(null);

  // function vedioSearch(term) {
  //   YTSearch({ key: api_Key, term: term }, (vedio) => {
  //     setVedio(vedio);
  //     setSelectedVedio(vedio[0]);
  //   });
  // }

  // vedioSearch("react js");

  // useEffect(() => {
  //   const vedioSearch = _.debounce(function (term) {
  //     vedioSearch(term);
  //   }, 200);
  // }, []);

  return (
    <div className="App">
      {/* <h5>Youtube Search:</h5> */}
      <GifySearch />
      {/* <Search onSearchTermChange={vedioSearch} />
      <VedioDetail video={selectedVedio} />
      <VedioList
        onVideoSelect={(selectedVedio) => setSelectedVedio(selectedVedio)}
        vedio={vedio}
      /> */}
    </div>
  );
}

export default App;
