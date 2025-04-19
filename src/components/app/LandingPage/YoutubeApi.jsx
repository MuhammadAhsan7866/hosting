export async function fetchVideos(query) {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}&type=video`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) throw new Error('No videos found');

    return data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));
  } catch (error) {
    console.error('YouTube API Error:', error);
    return [];
  }
}
