import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  description: { type: String },
  level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Video', videoSchema);