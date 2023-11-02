const express = require('express');
const { create, getProjectById, getAllProjects, filterIssues } = require('../controllers/projects');
const { createIssue } = require('../controllers/issues');
const router = express.Router();

router.post('/project/create', create);
router.get('/project?:id', getProjectById);
router.get('/', getAllProjects);

router.post('/create-issue', createIssue);
// router.post('/filter-issues', filterIssues)

router.post('/project?:id', getProjectById);
module.exports = router;