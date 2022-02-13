import React from "react";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import Heatmap from "./Heatmap";

function Search() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [after, setAfter] = useState("");
  const [subreddit, setSubreddit] = useState("");

  useEffect(() => {
    if (posts.length < 500 && subreddit) {
      fetchTopPosts();
    }
  }, [subreddit, after]);

  async function fetchTopPosts() {
    setStatus("loading");
    // Max limit is 100 posts per fetch
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=all&limit=100&after=${after}`;
    const response = await fetch(url);
    const { data } = await response.json();
    data.children.forEach((child) => {
      setPosts((posts) => [...posts, child]);
    });
    // get the next 100 posts
    setAfter(data.after);
    setStatus("resolved");
  }

  return (
    <div className="container items-center mx-auto">
      <SearchForm onSearch={setSubreddit} setPosts={setPosts} />

      {status === "loading" && (
        <div className="mx-96 my-20">
          <div
            className="mx-72 w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"
            data-testid="loading-circle"
          ></div>
        </div>
      )}

      {status === "resolved" && (
        <>
          <Heatmap posts={posts} />
        </>
      )}
    </div>
  );
}

export default Search;
