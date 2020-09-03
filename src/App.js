import React, { Fragment, useState } from 'react';
import './App.css';

// Initial data
const initialData = [
  { objectID: 1, title: "Google", url: "http://google.ca" },
];

export default function App() {

  // Keep track of "data" as State. Initialize with some initial Data
  const [data, setData] = useState(initialData);

  // Keep track of " query" 
  const [query, setQuery] = useState("react");

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.map(item => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));

  // Convenience onChange function
  const onChange = function (event) {
    setQuery(event.target.value);
  };

  return (
    <Fragment className="App">
      <h3>My Search Page</h3>

      <h4>{query}</h4>
      <input type="text" value={query} onChange={onChange} />

      <ul>{hitsList}</ul>
    </Fragment>
  );
}
