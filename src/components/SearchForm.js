import React from "react";
import { useState } from "react";

function SearchForm({ onSearch, setPosts }) {
  const [subreddit, setSubreddit] = useState("javascript");

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(subreddit);
    setPosts([]);
  };

  return (
    <div className="mx-96 pt-8">
      <h1 className="text-5xl mx-4 pt-1 font-display tracking-widest pl-7 mt-1 leading-relaxed">
        Find the best time for a subreddit
      </h1>

      <form onSubmit={onSubmit} className="mx-20">
        <label htmlFor="subreddit" className="mx-4">
          r/
        </label>
        <input
          type="text"
          name="subreddit"
          value={subreddit}
          onChange={(event) => {
            setSubreddit(event.target.value);
          }}
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="bg-orange-100 text-sm font-mono ml-12 mt-11 pt-2 pb-2 px-4 text-white rounded leading-tight"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
