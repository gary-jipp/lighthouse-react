import React from 'react';
import './App.css';

function App() {

  const data = {
    hits: [
      { objectID: 1, title: "Google", url: "http://google.ca" },
      { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
    ]
  };

  // Build list (array) of 'hits'
  const hitsList = data.hits.map(item =>
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  );

  return (
    <div className="App">
      <ul>{hitsList}</ul>
    </div>
  );
}

export default App;
