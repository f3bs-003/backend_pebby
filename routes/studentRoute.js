const express = require('express');
const {  getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Student Routes
router.get('/', authenticateToken, getStudents);
router.get('/:id', authenticateToken, getStudentById);
router.post('/', authenticateToken, createStudent);
router.put('/:id', authenticateToken, updateStudent);
router.delete('/:id', authenticateToken, deleteStudent);

module.exports = router;