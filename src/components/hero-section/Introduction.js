import React from "react";

function Introduction() {
  return (
    <div className="container mx-96 items-center mx-auto pt-8">
      <p className="text-5xl mx-4 pt-1 font-display tracking-widest pl-7 mt-1 leading-relaxed">
        No reactions to your reddit posts?
      </p>
      <p className="pl-8 mt-3 mx-4 text-sm tracking-widest font-mono mb-0.5 text-gray-400">
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
      <button className="bg-orange-100 text-sm font-mono ml-58 mt-11 pt-2 pb-2 px-4 text-white rounded leading-tight">
        SHOW ME THE BEST TIME
      </button>
      <div className="mx-72 mt-10 font-mono text-gray-400 font-normal">
        <a href="/search" className="text-lg">
          r/javascript
        </a>
      </div>
    </div>
  );
}

export default Introduction;
