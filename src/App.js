import React, { useState, useEffect } from 'react';
import axios from "axios";
import Input from "./Input";
import './App.css';

function App() {
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(); // Won't need this anymore

  // Fetch data whenever url changes
  useEffect(() => {
    axios(url).then(result => setData(result.data));
  }, [url]);

  // Build list of 'hits'
  const hitsList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  const onClick = function (text) {
    setUrl(BASEURL + text);
  };

  return (
    <div className="App">
      <h3>My Search Page</h3>

      {/* Use a component for the Search Control */}
      <Input initial="" onClick={onClick} />
      <h4>{url}</h4>

      <ul>{hitsList}</ul>

    </div>
  );
}

export default App;
