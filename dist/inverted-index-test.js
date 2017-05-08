'use strict';

var _InvertedIndex = require('../src/InvertedIndex');

var _InvertedIndex2 = _interopRequireDefault(_InvertedIndex);

var _emptyBook = require('../fixtures/emptyBook.json');

var _emptyBook2 = _interopRequireDefault(_emptyBook);

var _malformedBook = require('../fixtures/malformedBook.json');

var _malformedBook2 = _interopRequireDefault(_malformedBook);

var _validBook = require('../fixtures/validBook.json');

var _validBook2 = _interopRequireDefault(_validBook);

var _samples = require('../fixtures/samples');

var _samples2 = _interopRequireDefault(_samples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sampleFileContent = _samples2.default.sampleFileContent; /**
                                                             *
                                                             */

var sampleResult = _samples2.default.sampleResult;
var invertedindex = new _InvertedIndex2.default();

/**
 * testing for the proper index created in a valid json book.
 */
describe('Create Index', function () {
  it('should be able create index for valid book and an error for emptyBook and malformedBook ', function () {
    expect(invertedindex.createIndex('emptyBook.json', _emptyBook2.default)).toEqual('Invalid File Content');
    expect(invertedindex.createdIndex('malformedBook.json', _malformedBook2.default)).toEqual('Invalid File Content');
    expect(invertedindex.createIndex('validBook.json', sampleFileContent)).toEqual(sampleResult);
  });
});

// describe('Create Index', () => {
//   describe('getToken', () => {
//   it('should return text in a lower case character form and split by spaces  ', () => {
//       expect(invertedindex.createIndex('emptyBook.json', emptyBook)).toEqual('Invalid File Content');