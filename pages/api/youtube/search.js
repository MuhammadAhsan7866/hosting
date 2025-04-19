import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) return res.status(400).json({ error: 'Missing query' });

  try {
    const response = await axios.get(`https://m.youtube.com/results`, {
      params: {
        client: 'mv-google',
        gl: 'EN',
        hl: 'en',
        q,
        submit: 'Search'
      },
      headers: {
        'User-Agent': 'Opera/9.80 (BlackBerry; Opera Mini/4.5.33868/37.8993; HD; en_US)',
      }
    });

    const html = response.data;
    const jsonMatch = html.match(/var ytInitialData = '([^']+)'/);
    if (!jsonMatch) return res.status(500).json({ error: 'Failed to parse search data' });

    let decoded = jsonMatch[1].replace(/\\x([0-9a-fA-F]{2})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
    decoded = decoded.replace(/\\"/g, '"');

    const jsonData = JSON.parse(decoded);

    const items = [];
    const listings = jsonData?.contents?.sectionListRenderer?.contents?.[0]?.itemSectionRenderer?.contents || [];

    listings.forEach((item) => {
      const video = item.videoWithContextRenderer;
      if (video) {
        items.push({
          id: video.videoId,
          title: video.title?.runs?.[0]?.text,
          duration: video.lengthText?.runs?.[0]?.text,
          channel: video.shortBylineText?.runs?.[0]?.text,
          view: video.viewCountText?.simpleText || video.viewCountText?.runs?.[0]?.text,
          thumbnail: video.thumbnail?.thumbnails?.pop()?.url
        });
      }
    });

    res.status(200).json({ items });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
