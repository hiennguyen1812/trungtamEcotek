import { useState } from "react";
import "./Search.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSearch(searchValue);
    console.log(event.target.value);
  };

  return (
    <div className="search_center mt-3">
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Control
        value={searchValue}
        onChange={(evt) => setSearchValue(evt.target.value)}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
};

export default Search;
