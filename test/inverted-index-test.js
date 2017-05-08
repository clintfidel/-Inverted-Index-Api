 /**
 *
 */
import InvertedIndex from '../src/InvertedIndex';
import emptyBook from '../fixtures/emptyBook.json';
import malformedBook from '../fixtures/malformedBook.json';
import validBook from '../fixtures/validBook.json';
import samples from '../fixtures/samples';

const sampleFileContent = samples.sampleFileContent;
const sampleResult = samples.sampleResult;
const invertedindex = new InvertedIndex();


describe('Read book data', () => {
  it('Should return invalid file content for empty JSON Array', () => {
    expect(invertedindex.emptyArray(emptyBook)).toEqual('emptyJson');
  });

  it('Should return true for invalid JSON file', () => {
    expect(invertedindex.invalidFile(malformedBook)).toEqual(true);
  });

//   it('Should return  for wrong key json file', () => {
//     expect(InvertedIndex.isValidContent(wrongFormat)).toEqual(false);
//   });
// });

  describe('Populate Index', () => {
    it('should  check that JSON file has been read,once index is created',
    () => {
      expect(invertedindex.createIndex('validBook.json', sampleFileContent)).toEqual(sampleResult);
    });
  });

  it('Should create index once JSON file has been read', () => {
    invertedindex.createIndex('sampleResult', sampleResult);
    expect(invertedindex.sampleResult).toEqual({

    });
  });

  it('Should ensure each key maps correct object', () => 
    InvertedIndex.createIndex('sampleResult', sampleResult);
    expect(invertedindex.getToken('validBook').sampleFileContent).toEqual(sampleResult);
  });
});
