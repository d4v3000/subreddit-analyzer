import React from "react";

function PostsTable({ posts }) {
  let tableHeader = ["Title", "Time Posted", "Score", "Comments", "Author"];

  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }

  return (
    <div className="mt-10 mx-40">
      <h1 className="text-3xl my-3 font-display tracking-widest leading-relaxed">
        Posts
      </h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {tableHeader.map((title) => (
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            let utcSeconds = post.created_utc;
            let d = new Date(0);
            d.setUTCSeconds(utcSeconds);
            let hours = d.getHours();
            let minute = d.getMinutes();
            if (minute < 10) {
              minute = minute.toString();
              minute = "0" + minute;
            }
            if (hours < 10) {
              hours = hours.toString();
              hours = "0" + hours;
            }
            let time = hours + ":" + minute;

            let link = "https://www.reddit.com" + post.permalink;

            return (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-lg text-blue-600">
                  <a href={link} target="_blank">
                    {post.title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {tConvert(time)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.score}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.num_comments}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.author}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PostsTable;
