import React from "react";

function Information() {
  return (
    <div className="container items-center mx-auto mt-32">
      <div>
        <div className="my-28 mx-80">
          <p
            className="text-2xl font-medium mb-3 font-display tracking-widest"
            id="how-it-works"
          >
            How it works
          </p>
          <ul className="list-disc list-inside text-gray-800 font-mono">
            <li>
              We find the 500 top posts from the past year for a subreddit.
            </li>
            <li className="my-1">
              The data is visualized in a heatmap grouped by weekday and hour of
              the day
            </li>
            <li>See immediately when to submit your reddit post</li>
          </ul>
        </div>
        <div className="my-10 mx-80 mr-96">
          <p
            className="text-2xl font-medium mb-3 font-display tracking-widest"
            id="about"
          >
            About
          </p>
          <p className="font-mono">
            This app was created to gain some experience with react and web
            development in general. It was created using professional workflows
            and tools like Kanban, ClickUp, Figma and GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Information;
