const express = require('express');
const router = express.Router();

// Mock comments data
let comments = [];
let nextId = 1;

// Get comments for a problem
router.get('/:problemId', (req, res) => {
  const problemComments = comments.filter(c => c.problemId === parseInt(req.params.problemId));
  res.json(problemComments);
});

// Add a comment
router.post('/', (req, res) => {
  const { problemId, text, author } = req.body;
  
  const newComment = {
    id: nextId++,
    problemId: parseInt(problemId),
    text,
    author,
    createdAt: new Date()
  };
  
  comments.push(newComment);
  res.status(201).json(newComment);
});

module.exports = router;