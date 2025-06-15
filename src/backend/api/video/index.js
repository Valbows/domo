// Video API endpoint
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement video fetching logic
    const videoData = {
      id: 'sample-video-id',
      url: 'https://example.com/video.mp4',
      title: 'Sample Video'
    };

    return res.status(200).json(videoData);
  } catch (error) {
    console.error('Error in video endpoint:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} 