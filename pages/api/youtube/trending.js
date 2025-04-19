import fetch from 'node-fetch';

export default async function handler(req, res) {
  const url = 'https://m.youtube.com/feed/trending?hl=id&gl=ID&client=mv-google';

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Opera/9.80 (BlackBerry; Opera Mini/4.5.33868/37.8993; HD; en_US) Presto/2.12.423 Version/12.16'
      }
    });

    const html = await response.text();
    // You’ll need to implement trending parsing logic similar to PHP
    const data = extractTrending(html); // You’ll define this

    res.status(200).json({ items: data.slice(0, 12), raw: html });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending videos' });
  }
}

// Helper to parse trending videos (very simplified)
function extractTrending(html) {
  const items = [];
  const videoRegex = /\/watch\?v=([\w-]+)/g;
  let match;

  while ((match = videoRegex.exec(html)) !== null) {
    items.push({
      id: match[1],
      title: `Video ${items.length + 1}` // Placeholder — replace with actual logic
    });
  }

  return items;
}
