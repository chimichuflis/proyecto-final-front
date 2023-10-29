import React from "react";
import Songs from "./Songs";
import "../../styles/TopTwenty.css";

function TopTwenty({ songItems }) {
  return (
    <div>
      <div className="subtitle-search">
        <h4>Top 20s</h4>
        <div className="line"></div>
      </div>
      <div className="songs-container">
        {songItems.map((item, index) => {
          return (
            <div key={index}>
              <Songs
                image={`artists/${item.artist_id}.jpeg`}
                song={item.song_name}
                artist={item.artist_name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopTwenty;
