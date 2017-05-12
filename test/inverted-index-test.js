 /**
 *
 */
import InvertedIndex from '../src/InvertedIndex';
import emptyBook from '../fixtures/emptyBook.json';
import malformedBook from '../fixtures/malformedBook.json';
import validBook from '../fixtures/validBook.json';
import samples from '../fixtures/samples';
import improperBook from '../fixtures/improperBook.json';

const sampleFileContent = samples.sampleFileContent;
const sampleResult = samples.sampleResult;
const invertedindex = new InvertedIndex();


describe('Inverted Index Class', () => {
  describe('Validate data', () => {
    it('Should return invalid file content for empty JSON Array', () => {
      expect(invertedindex.emptyArray(emptyBook)).toBeTruthy();
    });
    it('Should return true if the length of the filecontent is empty', () => {
      expect(invertedindex.emptyArray(emptyBook)).toEqual(true);
    });
    it('Should check if invertedIndex is an instance of InvertedIndex Class', () => {
      expect(invertedindex instanceof InvertedIndex).toBeTruthy();
    });
    it('Should return true if invertedIndex has allIndices as its property', () => {
      expect('allIndices' in invertedindex).toBeTruthy();
    });
    it('Should return true if invertedIndex has a constructor', () => {
      expect(InvertedIndex.constructor === Function).toBeTruthy();
    });
    it('Should return true if invertedIndex has fileContents as its property', () => {
      expect('fileContent' in invertedindex).toBeTruthy();
    });
    it('Should return true for invalid Json file', () => {
      expect(invertedindex.malformedFile(malformedBook)).toBeTruthy();
    });
    it('Should return true for wrong key in Json file', () => {
      expect(invertedindex.invalidFile(sampleFileContent)).toBeFalsy();
    });

    it('Should return an array for getToken function', () => {
      expect(invertedindex.getToken(validBook[0].text)).toEqual(['this', 'string', 'seeks']);
    });
    it('Should replace every non-alphanumeric key with a space', () => {
      expect(invertedindex.getToken(improperBook[0].text)).toEqual(['this', 'string', 'seeks']);
    });
  });

  describe('CreateIndex', () => {
    it('Should verify if validBook is an array of object', () => {
      expect(invertedindex.createIndex('validBook', sampleFileContent))
      .toBeTruthy();
    });

    it('should  check that JSON file has been read,once index is created', () => {
      expect(invertedindex.createIndex('validBook', validBook)).toEqual(sampleResult);
    });
  });


  describe('searchIndex', () => {
    const result = invertedindex.createIndex('validBook', sampleFileContent);
    const resultIndex = invertedindex.searchIndex(result, 'validBook', 'string');
    it('Should return the result from a search term', () => {
      expect(resultIndex)
      .toEqual({ string: [0, 1] });
    });
    it('Should return the result from a search term', () => {
      expect(resultIndex)
      .toEqual({ string: [0, 1] });
    });
    describe('searchIndex', () => {
      const searchResult = invertedindex.createIndex('validBook', sampleFileContent);
      const searchedIndex = invertedindex.searchIndex(searchResult, 'validBook', 'john');
      it('Should return Not found! for a term not found in the Json file', () => {
        expect(searchedIndex)
      .toEqual({ john: 'Not found!' });
      });
    });
  });
});
