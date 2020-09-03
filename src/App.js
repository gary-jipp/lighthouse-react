import React, { useState } from 'react';
import './App.css';

function App() {
  const title = "My Search Page";
  const BASEURL = 'https://hn.algolia.com/api/v1/search?query=';

  // Temporary initial data
  const initialData = {
    hits: [
      { objectID: 1, title: "Google", url: "http://google.ca" },
    ]
  };

  // Application State
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState("react");
  const [url, setUrl] = useState();

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.hits.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  // Convenience onChange function
  const onChange = function (event) {
    setInput(event.target.value);
  };

  const buttonClick = function (query) {
    setUrl(BASEURL + query);
  };

  return (
    <div className="App">
      <h3>{title}</h3>

      <h4>{query}</h4>
      <h4>{url}</h4>
      <input type="text" value={query} onChange={onChange} />

      <button type="button" onClick={buttonClick}> Search</button>
      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
