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
      fetchData();
    }
  }, [subreddit, after]);

  async function fetchData() {
    setStatus("loading");
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=all&limit=100&after=${after}`;
    const response = await fetch(url);
    const { data } = await response.json();
    data.children.forEach((child) => {
      setPosts((posts) => [...posts, child]);
    });
    setAfter(data.after);
    setStatus("resolved");
  }

  return (
    <div className="container items-center mx-auto">
      <SearchForm onSearch={setSubreddit} setPosts={setPosts} />

      {status === "loading" && (
        <div className="mx-96 my-20">
          <div className="mx-72 w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      )}

      {status === "resolved" && (
        <>
          <p>{posts.length}</p>
          {/* <div className="mx-32 my-20 bg-red-700 grid grid-cols-28 grid-rows-8">
            <div className="col-start-5 col-span-2 py-2 px-4">12:00am</div>
            <div className="col-span-2 py-2 px-4">2:00am</div>
            <div className="col-span-2 py-2 px-4">4:00am</div>
            <div className="col-span-2 py-2 px-4">6:00am</div>
            <div className="col-span-2 py-2 px-4">8:00am</div>
            <div className="col-span-2 py-2 px-4">10:00am</div>
            <div className="col-span-2 py-2 px-4">12:00am</div>
            <div className="col-span-2 py-2 px-4">2:00pm</div>
            <div className="col-span-2 py-2 px-4">4:00pm</div>
            <div className="col-span-2 py-2 px-4">6:00pm</div>
            <div className="col-span-2 py-2 px-4">8:00pm</div>
            <div className="col-span-2 py-2 px-4">10:00pm</div>
            <div className="px-16 py-2 col-span-4 text-white bg-slate-800 cursor-default">
              Sunday
            </div>
          </div> */}
          <Heatmap posts={posts} />
        </>
      )}
    </div>
  );
}

export default Search;
