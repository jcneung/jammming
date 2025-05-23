import "./SearchBar.css";
import { useState } from "react";

function SearchBar(props) {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchWord);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchWord"
        name="searchWord"
        value={searchWord}
        placeholder="Song title"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
