import express from 'express'; // importing express for routing
import InvertedIndex from '../src/InvertedIndex'; // importing the InvertedIndex class

const invertedIndex = new InvertedIndex();
const api = express.Router();

api.post('/createIndex', (req, res) => {
  // console.log();
  const result = invertedIndex.createIndex('books.json', req.body);
  res.send(result);
});
api.post('/searchIndex', (req, res) => {
  res.send(invertedIndex.searchIndex());
});
export default api;
