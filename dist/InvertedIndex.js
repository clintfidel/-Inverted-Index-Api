'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * InvertedIndex class
 */
var InvertedIndex = function () {
  /**
   * constructor - contain class properties
   */
  function InvertedIndex() {
    _classCallCheck(this, InvertedIndex);

    this.allIndices = {};
    this.fileContent = '';
  }
  /**
    * createIndex - creates index for json files e.g {of:[0,1,2,3,4]}
    * @param  {string} fileName : string
    * @param  {object} fileContent :array of object
    * @return {object} returns : object
    */


  _createClass(InvertedIndex, [{
    key: 'createIndex',
    value: function createIndex(fileName, fileContent) {
      var _this = this;

      var indices = {};
      if (!this.emptyArray(fileContent) && this.invalidFile(fileContent) === false) {
        fileContent.forEach(function (element, index) {
          var allText = element.text;
          var bookToken = _this.getToken(allText);
          bookToken.forEach(function (token) {
            if (token in indices) {
              indices[token].push(index);
            } else if (token === '') {
              token = '';
            } else {
              indices[token] = [index];
            }
          });
        });
      } else {
        return 'Invalid File Content';
      }
      this.allIndices[fileName] = indices;
      return this.allIndices;
    }
    /**
      * getToken -  replaces non-alphanemeric characters with a space
      * also splits text by spaces
      * @param  {string} text takes in text in form of string
      * @return {object}   returns an array
      */

  }, {
    key: 'getToken',
    value: function getToken(text) {
      this.fileContent = text;
      text = text.replace(/[^A-Za-z0-9]/g, ' ');
      return text.toLowerCase().split(/\s+/);
    }

    /**
     * invalidFile - checks for invalid json file
     * @param  {object} fileContent takes in an object
     * @return {boolean}   return a boolean(true)
     */

  }, {
    key: 'invalidFile',
    value: function invalidFile(fileContent) {
      var _this2 = this;

      var status = false;
      fileContent.forEach(function (book) {
        if (!book.title || !book.text) {
          status = true;
          _this2.fileContent = fileContent;
        }
      });
      return status;
    }
    /**
     * emptyArray - checks for empty json file
     * @param  {object} fileContent takes in an object
     * @return {boolean}  return boolean(true)
     */

  }, {
    key: 'emptyArray',
    value: function emptyArray(fileContent) {
      this.fileContent = fileContent;
      if (fileContent.length === 0) {
        return true;
      }
    }
    /**
    *  searchIndex - searches for the index of the valid json file created
    * @param  {Object} index: array of object created in createIndex method
    * @param  {string} fileName: name of file for search term
    * @param  {array} terms: rest operator(term to be search for)
    * @return {object} returns created index for term saerched.
    **/

  }, {
    key: 'searchIndex',
    value: function searchIndex(index, fileName) {
      this.fileContent = fileName;
      var searchResult = {};
      fileName = Object.keys(index)[0];
      var eachKeys = Object.keys(index[fileName]);

      for (var _len = arguments.length, terms = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        terms[_key - 2] = arguments[_key];
      }

      for (var i = 0; i < terms.length; i += 1) {
        var splitTerms = terms[i].toLowerCase();
        splitTerms = splitTerms.split(/[\s]/g);
        for (var j = 0; j < splitTerms.length; j += 1) {
          for (var indexes = 0; indexes < eachKeys.length; indexes += 1) {
            if (!(splitTerms[j] in index[fileName])) {
              Object.assign(searchResult, _defineProperty({}, splitTerms[j], 'Not found!'));
            }
            if (splitTerms[j] === eachKeys[indexes]) {
              Object.assign(searchResult, _defineProperty({}, splitTerms[j], index[fileName][eachKeys[indexes]]));
            }
          }
        }
      }
      return searchResult;
    }
  }]);

  return InvertedIndex;
}();

exports.default = InvertedIndex;