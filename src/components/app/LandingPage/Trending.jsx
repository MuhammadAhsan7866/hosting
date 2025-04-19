// /app/embed/youtube/trending/page.jsx
"use client";

import { useEffect, useState } from "react";

const TrendingEmbed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch("/api/youtube/trending");
        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Failed to fetch trending videos", err);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>🔥 Trending YouTube Videos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {videos.map((video) => (
          <li key={video.id} style={{ marginBottom: "1rem" }}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <strong>{video.title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingEmbed;
