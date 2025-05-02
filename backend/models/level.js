import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['Basic', 'Intermediate', 'Advanced', 'Crash'],
    required: true
  },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Level', levelSchema);