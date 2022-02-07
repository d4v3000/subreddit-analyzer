import React from "react";
import SearchForm from "./SearchForm";

function Search() {
  const onSearch = () => {};

  return (
    <div className="container items-center mx-auto">
      <SearchForm onSearch={onSearch} />
    </div>
  );
}

export default Search;
