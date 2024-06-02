const { Router } = require('express');
const gradesCtrl = require('../controllers/grades.js');

const router = Router();

router.post('/', gradesCtrl.createGrade);
router.get('/:id',gradesCtrl.getGradeById);
router.get('/', gradesCtrl.getGrades);
router.patch('/:id', gradesCtrl.updateGrade);

module.exports = router;