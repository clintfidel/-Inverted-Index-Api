import express from 'express'; // importing express for routing
import InvertedIndex from './InvertedIndex'; // importing the InvertedIndex class

const invertedIndex = new InvertedIndex();
const app = express.Router();
let createdIndex;

app.post('/createIndex', (req, res) => {
  try {
    req.setEncoding('utf8');
    const { fileName, fileContent } = req.body;
    createdIndex = invertedIndex.createIndex(fileName, JSON.parse(fileContent));
    res.status(200).send(createdIndex);
  } catch (err) {
    res.status(500).send('Request could not be completed. Please try again');
  }
});
app.post('/searchIndex', (req, res) => {
  try {
    const { fileName, terms } = req.body;
    const index = createdIndex;
    const searchTermResult =
    invertedIndex.searchIndex(index, fileName, terms);
    res.status(200).send(searchTermResult);
  } catch (err) {
    res.status(500).send('Request could not be completed. Please try again');
  }
});


export default app;
