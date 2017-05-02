import express from 'express';
import InvertedIndex from './InvertedIndex'; // importing the InvertedIndex class

const app = express.Router();
app.post('/createIndex', InvertedIndex.createIndex);
// api.post('/searchIndex', InvertedIndex.createIndex)s;
export default app;
