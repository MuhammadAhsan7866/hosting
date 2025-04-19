import axios from 'axios';

export default async function handler(req, res) {
  const { q, token } = req.query;

  try {
    const url = token
      ? `https://m.youtube.com/results?client=mv-google&gl=EN&hl=en&search_sort=relevance&q=${encodeURIComponent(q)}&search_type=search_video&uploaded=&action_continuation=1&ctoken=${token}`
      : `https://m.youtube.com/results?client=mv-google&gl=EN&hl=en&q=${encodeURIComponent(q)}&submit=Telusuri`;

    console.log("🔍 Fetching URL:", url);

    const { data: html } = await axios.get(url);

    console.log("✅ Fetched HTML (length):", html.length);

    const initialMatch = html.match(/var ytInitialData\s*=\s*(\{.*?\});<\/script>/s);
    
    if (!initialMatch) {
      console.error("❌ ytInitialData NOT FOUND in HTML");
      return res.status(500).json({ error: 'ytInitialData not found in HTML' });
    }

    const ytJsonString = initialMatch[1];

    let json;
    try {
      json = JSON.parse(ytJsonString);
    } catch (parseError) {
      console.error("❌ Failed to parse ytInitialData JSON", parseError.message);
      return res.status(500).json({ error: 'Failed to parse ytInitialData JSON' });
    }

    const contents =
      json.contents?.sectionListRenderer?.contents[1]?.itemSectionRenderer?.contents ||
      json.contents?.sectionListRenderer?.contents[0]?.itemSectionRenderer?.contents;

    if (!contents) {
      console.error("❌ No video contents found");
      return res.status(500).json({ error: 'No video contents found in parsed data' });
    }

    const items = contents
      .filter((item) => item.videoWithContextRenderer)
      .map((item) => {
        const video = item.videoWithContextRenderer;
        return {
          id: video.videoId,
          title: video.title?.runs?.[0]?.text || '',
          duration: video.lengthText?.runs?.[0]?.text || '',
          channel: video.shortBylineText?.runs?.[0]?.text || '',
          view: video.viewCountText?.runs?.[0]?.text || '',
          type: 'video',
        };
      });

    return res.status(200).json({
      items,
      query: q,
      first: items[0],
    });
  } catch (err) {
    console.error("❌ General scraping error:", err.message);
    return res.status(500).json({ error: 'Failed to fetch or parse YouTube data.' });
  }
}
