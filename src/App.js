import React from 'react';
// import './App.css';

const data = {
  hits: [
    { objectID: 1, title: "Google", url: "http://google.ca" },
    { objectID: 2, title: "Amazon", url: "http://amazon.ca" },
  ]
};

function App() {

  // React will just render whatever you give it
  const header = <h3>This is a Header</h3>;
  const div = <div>This is stuff inside a div</div>;
  const li = <li>This is a list item</li>;

  const array =
    [
      <li>This is a list item in an array</li>,
      <li>This is a list item in an array</li>
    ];

  // Build (array) of <li> elements from  data.hits
  const hitsList = data.hits.map(item =>
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  );

  return (
    <div className="App">
      {header}
      {div}
      <ul>
        {li}
        {array}
      </ul>
    </div>
  );
}

export default App;
