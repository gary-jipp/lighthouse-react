import React from 'react';
import './App.css';

function App() {

  const data = {
    hits: [
      { objectID: 1, title: "Google", url: "http://google.ca" },
      { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
    ]
  };

  const list = [<li>This is a list item</li>];

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.hits.map(item =>
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  );

  return (
    <div className="App">
      <ul>{list}</ul>
    </div>
  );
}

export default App;
