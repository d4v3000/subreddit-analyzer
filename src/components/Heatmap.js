import React from "react";
import PostsTable from "./PostsTable";
import { useState } from "react";

function Heatmap({ posts }) {
  let sunday = [];
  let monday = [];
  let tuesday = [];
  let wednesday = [];
  let thursday = [];
  let friday = [];
  let saturday = [];
  let hours = [
    "12:00am",
    "2:00am",
    "4:00am",
    "6:00am",
    "8:00am",
    "10:00am",
    "12:00pm",
    "2:00pm",
    "4:00pm",
    "6:00pm",
    "8:00pm",
    "10:00pm",
  ];
  const [detailToggle, setDetailToggle] = useState(false);
  const [detailPosts, setDetailPosts] = useState([]);

  for (let index = 0; index < 24; index++) {
    sunday.push([]);
    monday.push([]);
    tuesday.push([]);
    wednesday.push([]);
    thursday.push([]);
    friday.push([]);
    saturday.push([]);
  }

  const makeBackgroundColor = (numberOfPosts) => {
    let background = "";
    if (numberOfPosts === 0) {
      background = "bg-[#E0E5A3]";
    } else if (numberOfPosts < 4) {
      background = "bg-[#A9D194]";
    } else if (numberOfPosts < 6) {
      background = "bg-[#8CC894]";
    } else if (numberOfPosts < 10) {
      background = "bg-[#5EB391]";
    } else if (numberOfPosts >= 10) {
      background = "bg-[#3984A3]";
    }
    return background;
  };

  const clickElement = (element) => (event) => {
    setDetailPosts(element);
    setDetailToggle(true);
  };

  posts.forEach((post) => {
    let utcSeconds = post.data.created_utc;
    let d = new Date(0);
    d.setUTCSeconds(utcSeconds);

    // seperate all posts into arrays for each day
    if (d.getDay() === 0) {
      sunday[d.getHours()].push(post.data);
    } else if (d.getDay() === 1) {
      monday[d.getHours()].push(post.data);
    } else if (d.getDay() === 2) {
      tuesday[d.getHours()].push(post.data);
    } else if (d.getDay() === 3) {
      wednesday[d.getHours()].push(post.data);
    } else if (d.getDay() === 4) {
      thursday[d.getHours()].push(post.data);
    } else if (d.getDay() === 5) {
      friday[d.getHours()].push(post.data);
    } else if (d.getDay() === 6) {
      saturday[d.getHours()].push(post.data);
    }
  });

  const makeRow = (day, posts) => {
    return (
      <>
        <div className="px-14 py-2 col-span-4 text-white bg-slate-800 cursor-default font-mono">
          {day}
        </div>
        {posts.map((hour, i) => (
          <div
            className={
              makeBackgroundColor(hour.length) +
              " cursor-pointer py-2 px-4 text-white font-medium"
            }
            onClick={clickElement(hour)}
            key={i}
          >
            {hour.length}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="mx-32 my-20 grid grid-cols-28 grid-rows-8">
      {hours.map((hour, i) => {
        if (i === 0) {
          return (
            <div
              className="col-start-5 col-span-2 py-2 px-4 bg-gray-100 font-mono"
              key={i}
            >
              {hour}
            </div>
          );
        } else {
          return (
            <div className="col-span-2 py-2 px-4 bg-gray-100 font-mono" key={i}>
              {hour}
            </div>
          );
        }
      })}
      {makeRow("Sunday", sunday)}
      {makeRow("Monday", monday)}
      {makeRow("Tuesday", tuesday)}
      {makeRow("Wednesday", wednesday)}
      {makeRow("Thursday", thursday)}
      {makeRow("Friday", friday)}
      {makeRow("Saturday", saturday)}

      {detailToggle && <PostsTable posts={detailPosts} />}
    </div>
  );
}

export default Heatmap;
