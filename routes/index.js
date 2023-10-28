const express = require('express');
const { create, getProjectById, getAllProjects } = require('../controllers/projects');
const router = express.Router();

router.post('/project/create', create);
router.get('/project/:id', getProjectById);
router.get('/', getAllProjects);

module.exports = router;