import supertest from 'supertest';
import server from '../src/app';
import emptyBook from '../fixtures/emptyBook.json';
import malformedBook from '../fixtures/malformedBook.json';
import validBook from '../fixtures/validBook.json';
import samples from '../fixtures/samples';
import improperBook from '../fixtures/improperBook.json';

const sampleFileContent = samples.sampleFileContent;
const sampleResult = samples.sampleResult;

const api = supertest(server);

describe('apitest', () => {


describe('createIndex route', () => {
  it('should return the index of a fileContent  ', () => {
    api.post('/createIndex')
    .send({ fileName: 'validBook.json', fileContent: sampleFileContent })
    .expect(sampleResult);
  });
  describe('createIndex route', () => {
    it('should return an error message: Invalid File Content for malformedBook', () => {
      api.post('/createIndex')
    .send({ fileName: 'malformedBook', fileContent: malformedBook })
    .expect('Invalid File Content');
    });
  });
  describe('createIndex route', () => {
    it('should return an error message: Invalid File Content for emptyBook', () => {
      api.post('/createIndex')
    .send({ fileName: 'emptyBook', fileContent: emptyBook })
    .expect('Invalid File Content');
    });
  });
  describe('createIndex route', () => {
    it('should return replace unnecessary symbol character with an empty string', () => {
      api.post('/createIndex')
    .send({ fileName: 'improperBook', fileContent: improperBook })
    .expect('');
    });
  });
  describe('createIndex route', () => {
    it('should return an error message: Invalid File Content for a string', () => {
      api.post('/createIndex')
    .send({ fileName: 'Book.json', fileContent: '' })
    .expect('Invalid File Content');
    });
  });
  describe('createIndex route', () => {
    it('should return an error message:Invalid File Content for an object  ', () => {
      api.post('/createIndex')
   .send({ fileName: 'bookMe.json', fileContent: {} })
   .expect('Invalid File Content');
    });
  });
  describe('createIndex route', () => {
    it('should return an error: Invalid File Content for emptyBook', () => {
      api.post('/createIndex')
    .send({ fileName: 'malformedBook', fileContent: emptyBook })
    .expect('Invalid File Content');
    });
  });
});
describe('searchIndex route', () => {
  it('should return created index for the searched term', () => {
    api.post('/createIndex')
    .send({ fileName: 'validBook', fileContent: sampleFileContent })
    .end(() => {
      api.post('/searchIndex')
    .send({
      fileName: validBook,
      terms: 'string'
    })
    .end((err, res) => {
      expect(res.body).toEqual({ string: [0, 1] });
    });
    });
  });
  it('should return error message : Not Found! for term not found', () => {
    api.post('/createIndex')
    .send({ fileName: 'validBook', fileContent: sampleFileContent })
    .end(() => {
      api.post('/searchIndex')
    .send({
      fileName: validBook,
      terms: 'John'
    })
    .end((err, res) => {
      expect(res.body).toEqual('Not found!');
    });
    });
  });
  it(`should return status error message when term is not found 
     in index Created`, () => {
    api.post('/createIndex')
    .send({ fileName: 'emptyBook', fileContent: emptyBook })
    .end(() => {
      api.post('/searchIndex')
    .send({
      fileName: validBook,
      terms: 'string'
    })
    .end((err, res) => {
      expect(res.status).toEqual(500);
    });
    });
  });
  it(`should return status message for
       a successful search `, () => {
    api.post('/createIndex')
    .send({ fileName: 'valiBook', fileContent: validBook })
    .end(() => {
      api.post('/searchIndex')
    .send({
      fileName: validBook,
      terms: 'string'
    })
    .end((err, res) => {
      expect(res.status).toEqual(200);
    });
    });
  });
  it(`should return status message for an 
      internal server error`, () => {
    api.post('/createIndex')
    .send({ fileName: 'emptyBook', fileContent: emptyBook })
    .end(() => {
      api.post('/searchIndex')
    .send({
      fileName: emptyBook,
      terms: 'string'
    })
    .end((err, res) => {
      expect(res.status).toEqual(500);
    });
    });
  });
});
  server.close();
});
