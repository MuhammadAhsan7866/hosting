import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing video ID' });

  try {
    const response = await fetch(`https://www.youtube-nocookie.com/embed/${id}`);
    const data = await response.text();

    const title = extractBetween(data, '<title>', '- YouTube');
    const durationSeconds = extractBetween(data, '\\"videoDurationSeconds\\":\\"', '\\"');
    const chtitle = extractBetween(data, '"expanded_title":"', '"');
    const view = extractBetween(data, '\\"subtitle\\":{\\"runs\\":[{\\"text\\":\\"', 'views');

    res.status(200).json({
      id,
      title: title?.trim(),
      duration: formatDuration(durationSeconds),
      chtitle,
      view
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video data' });
  }
}

function extractBetween(str, start, end) {
  const startIdx = str.indexOf(start);
  const endIdx = str.indexOf(end, startIdx + start.length);
  if (startIdx === -1 || endIdx === -1) return null;
  return str.substring(startIdx + start.length, endIdx);
}

function formatDuration(seconds) {
  const sec = parseInt(seconds, 10);
  const h = Math.floor(sec / 3600).toString().padStart(2, '0');
  const m = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}
