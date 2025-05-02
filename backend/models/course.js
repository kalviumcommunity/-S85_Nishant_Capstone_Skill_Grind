import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Course', courseSchema);