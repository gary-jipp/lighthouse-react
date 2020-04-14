import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

  // Application State
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("react");
  const [url, setUrl] = useState();

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

  return (
    <div className="App">
      <h3>My Search Page</h3>

      <h4>{query}</h4>
      <h4>{url}</h4>
      <input type="text" value={query}
        onChange={event => setQuery(event.target.value)} />

      <button
        type="button"
        onClick={() => setUrl(BASEURL + query)}>
        Search
			</button>
      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
