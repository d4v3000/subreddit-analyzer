import React from "react";

function Heatmap({ posts }) {
  let sunday = [];
  let monday = [];
  let tuesday = [];
  let wednesday = [];
  let thursday = [];
  let friday = [];
  let saturday = [];

  for (let index = 0; index < 24; index++) {
    sunday.push([]);
    monday.push([]);
    tuesday.push([]);
    wednesday.push([]);
    thursday.push([]);
    friday.push([]);
    saturday.push([]);
  }

  const makeClass = (numberOfPosts) => {
    let background = "";
    if (numberOfPosts === 0) {
      background = "bg-yellow-100";
    } else if (numberOfPosts < 4) {
      background = "bg-green-200";
    } else if (numberOfPosts < 6) {
      background = "bg-green-400";
    } else if (numberOfPosts < 10) {
      background = "bg-green-500";
    } else if (numberOfPosts >= 10) {
      background = "bg-blue-400";
    }
    return background;
  };

  const clickElement = (element) => (event) => {
    console.log(element);
  };

  posts.forEach((post) => {
    let utcSeconds = post.data.created_utc;
    let d = new Date(0);
    d.setUTCSeconds(utcSeconds);

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
      <tr>
        <td className="px-8 text-white bg-slate-800 cursor-default">{day}</td>
        {posts.map((hour) => (
          <td
            className={makeClass(hour.length) + " px-4 cursor-pointer"}
            onClick={clickElement(hour)}
          >
            {hour.length}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <>
      <table>
        <tbody className="">
          {makeRow("Sunday", sunday)}
          {makeRow("Monday", monday)}
          {makeRow("Tuesday", tuesday)}
          {makeRow("Wednesday", wednesday)}
          {makeRow("Thursday", thursday)}
          {makeRow("Friday", friday)}
          {makeRow("Saturday", saturday)}
        </tbody>
      </table>
    </>
  );
}

export default Heatmap;
