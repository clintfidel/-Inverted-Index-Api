'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * global class declaration
 */
var InvertedIndex = function () {
  /**
   * constructor - takes in json file
   * @return {type}  description
   */
  function InvertedIndex() {
    _classCallCheck(this, InvertedIndex);

    this.indices = {};
  }
  /**
   * createIndex - creates index for json files e.g of:[0,1,2,3,4]
   * @param  {string} fileName    description
   * @param  {object} fileContent description
   * @return {object}   returns
   */


  _createClass(InvertedIndex, [{
    key: 'createIndex',
    value: function createIndex(fileName, fileContent) {
      var _this = this;

      var indices = {};
      if (!this.constructor.emptyArray(fileContent) && this.constructor.invalidFile(fileContent) === false) {
        fileContent.forEach(function (element, index) {
          var allText = element.title + ' ' + element.text;
          var bookToken = _this.constructor.getToken(allText);
          bookToken.forEach(function (token) {
            if (token in indices) {
              var tokenResult = indices[token];
              if (tokenResult.indexOf(index) === -1) {
                indices[token].push(index);
              }
            } else {
              indices[token] = [index];
            }
          });
        });
      } else {
        return 'Invalid File Content';
      }
      return indices;
    }
    /**
     * getToken - splits text by spaces and return an array
     * @param  {string} text takes in text in form of string
     * @return {object}   returns an array
     */

  }, {
    key: 'searchIndex',

    /**
     *  searchIndex - searches for the index of the valid json file created
     * @param  {Object} fileContent object as an arg
     * @param  {object} terms    array of object
     * @return {Object}             description
     **/
    value: function searchIndex(fileContent) {
      var collector = [];
      var eachKey = this.createIndex('boy', fileContent);

      for (var _len = arguments.length, terms = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        terms[_key - 1] = arguments[_key];
      }

      if (terms.length === 1) {
        var splitTerms = terms[0].toLowerCase(); // turns array to lowercase
        splitTerms = splitTerms.split(/[\s]/g); // splits by spaces
        var eachKeys = Object.keys(eachKey);
        splitTerms.forEach(function (element) {
          // loops through an array
          for (var indexKey = 0; indexKey < eachKeys.length; indexKey += 1) {
            if (element === eachKeys[indexKey]) {
              collector.push(eachKey[eachKeys[indexKey]]); // appends index of eachkey
            }
          }
        });
      } else if (terms.length >= 2) {
        eachKey = this.createIndex('boy', fileContent);
        var _eachKeys = Object.keys(eachKey);
        for (var i = 0; i < terms.length; i += 1) {
          var _splitTerms = terms[i].toLowerCase();
          _splitTerms = _splitTerms.split(/[\s]/g);
          for (var j = 0; j < _splitTerms.length; j += 1) {
            for (var index = 0; index < _eachKeys.length; index += 1) {
              // conditional statements
              if (_splitTerms[j] === _eachKeys[index]) {
                collector.push(eachKey[_eachKeys[index]]);
              }
            }
          }
        }
      }
      // conditional statements
      if (collector.length >= 1) {
        collector.forEach(function (data) {
          console.log(data);
        });
      } else {
        return 'Not Found';
      }
    }
  }], [{
    key: 'getToken',
    value: function getToken(text) {
      return text.toLowerCase() // turns to lower case
      .split(/\s+/); // splits by spaces
    }
    /**
     * invalidFile - checks for invalid json file
     * @param  {object} fileContent takes in an object
     * @return {boolean}   return a boolean(true)
     */

  }, {
    key: 'invalidFile',
    value: function invalidFile(fileContent) {
      var status = false;
      fileContent.forEach(function (element) {
        if (/[$&@!(&#@%*^]/gi.test(element.title)) {
          status = true;
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
      if (fileContent <= []) {
        return true;
      }
      return false;
    }
  }]);

  return InvertedIndex;
}();

exports.default = InvertedIndex;