import express from 'express';
import { addVideo, getVideosByCourseAndLevel } from '../controllers/videocontroller.js';

const router = express.Router();

router.post('/add', addVideo);
router.get('/:courseId/:levelId', getVideosByCourseAndLevel);

export default router;
