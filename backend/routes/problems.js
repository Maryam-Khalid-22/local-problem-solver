const express = require('express');
const router = express.Router();

// Mock problems data
let problems = [];
let nextId = 1;

// Get all problems
router.get('/', (req, res) => {
  res.json(problems);
});

// Create a problem
router.post('/', (req, res) => {
  const { title, description, location, category } = req.body;
  
  const newProblem = {
    id: nextId++,
    title,
    description,
    location,
    category,
    status: 'Open',
    createdAt: new Date(),
    upvotes: 0,
    downvotes: 0
  };
  
  problems.push(newProblem);
  res.status(201).json(newProblem);
});

// Upvote a problem
router.post('/:id/upvote', (req, res) => {
  const problem = problems.find(p => p.id === parseInt(req.params.id));
  if (problem) {
    problem.upvotes += 1;
    res.json(problem);
  } else {
    res.status(404).json({ message: 'Problem not found' });
  }
});

// Downvote a problem
router.post('/:id/downvote', (req, res) => {
  const problem = problems.find(p => p.id === parseInt(req.params.id));
  if (problem) {
    problem.downvotes += 1;
    res.json(problem);
  } else {
    res.status(404).json({ message: 'Problem not found' });
  }
});

module.exports = router;