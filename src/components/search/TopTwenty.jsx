import React from "react";
import Songs from "./Songs";

function TopTwenty() {
  return (
    <div>
      <div className="subtitle-search">
        <h4>Top 20s</h4>
        <div className="line"></div>
      </div>
      <div className="songs-container">
        <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
        <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
        <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
        <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
        <Songs image="artists/1.jpeg" song="Cancion" artist="Mailey" />
      </div>
    </div>
  );
}

export default TopTwenty;
