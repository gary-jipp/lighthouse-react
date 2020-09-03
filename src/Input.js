import React, { useState } from "react";

// export default function Input(props) {
export default function Input({ onClick, initial }) {

  // Several ways we can reference props
  // const {onClick, initial} = props;

  // Just need one state 
  const [query, setQuery] = useState(initial);

  return (
    <div className="Input">
      <input type="text" value={query}
        onChange={(event) => setQuery(event.target.value)} />

      <button type="button"
        onClick={() => onClick(query)}>
        {/* onClick={() => props.onClick(query)}> */}
				Search
			</button>

    </div >
  );
}
