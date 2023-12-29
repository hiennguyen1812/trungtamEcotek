import { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSearch(searchValue);
    console.log(event.target.value);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="form-search">
        <input
          value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
          type="text"
          placeholder="Search....."
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
