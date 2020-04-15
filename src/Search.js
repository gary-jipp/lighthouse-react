import React, { useState } from "react";

// function Search(props) {
function Search({ onClick, initial }) {

	// Several ways we can reference props
	// const {onClick, initial} = props;

	// Just need one state 
	const [query, setQuery] = useState(initial);

	return (
		<div className="Search">
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

export default Search;
