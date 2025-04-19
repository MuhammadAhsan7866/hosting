export async function convertVideo(videoUrl, format = 'mp3') {
  try {
    const response = await fetch('/api/convert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoUrl, format }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Conversion failed');
    }

    // Check if the response is JSON (error) or blob (success)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Conversion failed');
    }

    const blob = await response.blob();
    if (!blob || blob.size === 0) {
      throw new Error('Received empty file');
    }

    const url = URL.createObjectURL(blob);
    const fileName = response.headers.get('content-disposition')?.split('filename=')[1] || `output.${format}`;
    
    return { name: fileName, url };
  } catch (error) {
    console.error('Conversion error:', error);
    throw error;
  }
}
