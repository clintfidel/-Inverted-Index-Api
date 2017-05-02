import express from 'express';
import InvertedIndex from './InvertedIndex'; // importing the InvertedIndex class

const api = express.Router();
api.post('/createIndex', InvertedIndex.createIndex);
// api.post('/searchIndex', InvertedIndex.createIndex)s;
export default api;
