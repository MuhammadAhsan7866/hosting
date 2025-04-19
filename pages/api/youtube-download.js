import ytdl from "ytdl-core";

export default async function handler(req, res) {
  const { url, format } = req.query;
  
  if (!ytdl.validateURL(url)) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    res.setHeader("Content-Disposition", `attachment; filename="video.${format}"`);
    
    if (format === "mp4") {
      ytdl(url, { format: "mp4", quality: "highest" }).pipe(res);
    } else if (format === "mp3") {
      ytdl(url, { filter: "audioonly", format: "mp3", quality: "highestaudio" }).pipe(res);
    } else {
      return res.status(400).json({ error: "Invalid format. Use mp3 or mp4." });
    }
  } catch (error) {
    console.error("Download error:", error);
    res.status(500).json({ error: "Failed to download the video" });
  }
}
