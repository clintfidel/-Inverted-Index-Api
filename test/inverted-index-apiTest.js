import supertest from 'supertest';
import app from '../src/app';
import emptyBook from '../fixtures/emptyBook.json';
import malformedBook from '../fixtures/malformedBook.json';
import validBook from '../fixtures/validBook.json';
import samples from '../fixtures/samples';
import improperBook from '../fixtures/improperBook.json';

const sampleFileContent = samples.sampleFileContent;
const sampleResult = samples.sampleResult;

const apiTest = supertest(app);



describe('createIndex route', () => {
  it('should return the index of a fileContent  ', (done) => {
    app.post('/api/v0/createIndex')
      .attach('validBook', '../fixtures/validBook.json')
      .attach('', '')
      .end(err, res) => {
          expect()
      }
  });
});
