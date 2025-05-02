import express from 'express';
import { createLevel, getLevelsByCourse } from '../controllers/levelController.js';

const router = express.Router();

router.post('/create', createLevel);
router.get('/:courseId', getLevelsByCourse);

export default router;