import React, { Fragment, useState } from "react";

function Search({ onClick, initial }) {
  // Note the destructuring again
  // Same as this: 
  // function Search(props) {
  // const {onClick, initial} = props;

  // Just need one state 
  const [query, setQuery] = useState(initial);

  // Convenience onChange function
  const onChange = function (event) {
    setQuery(event.target.value);
  };


  return (
    <Fragment>
      <input type="text" value={query} onChange={onChange} />

      <button type="button"
        onClick={() => onClick(query)}>
        {/* onClick={() => props.onClick(query)}> */}
				Search
			</button>

    </Fragment>
  );
}

export default Search;
