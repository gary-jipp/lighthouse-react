import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./Search";
import './App.css';

function App() {
  const title = "My Search Page";
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState();

  // Fetch data whenever url changes
  useEffect(() => {
    axios(url).then(result => setData(result.data));
  }, [url]);

  // Build array of 'hits'
  const hitsList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  const searchClick = function (query) {
    setUrl(BASEURL + query);
  };

  return (
    <div className="App">
      <h3>{title}</h3>
      <h4>{url}</h4>

      {/* Use a component for a Text & Button Control*/}
      <Search initial="React" onClick={searchClick} />

      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
