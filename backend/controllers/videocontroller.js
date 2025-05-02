import Video from '../models/Video.js';

export const addVideo = async (req, res) => {
  try {
    const { title, youtubeUrl, description, levelId, courseId } = req.body;
    const video = new Video({ title, youtubeUrl, description, level: levelId, course: courseId });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getVideosByCourseAndLevel = async (req, res) => {
  try {
    const { courseId, levelId } = req.params;
    const videos = await Video.find({ course: courseId, level: levelId });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
