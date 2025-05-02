import Level from '../models/level.js';

export const createLevel = async (req, res) => {
  try {
    const { name, courseId } = req.body;
    const level = new Level({ name, course: courseId });
    await level.save();
    res.status(201).json(level);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLevelsByCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const levels = await Level.find({ course: courseId });
      res.json(levels);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  