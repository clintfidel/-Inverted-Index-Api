/**
 * InvertedIndex class
 */
  class InvertedIndex {
 /**
  * constructor - contain class properties
  */
    constructor() {
      this.allIndices = {};
      this.fileContent = '';
    }
  /**
    * createIndex - creates index for json files e.g {of:[0,1,2,3,4]}
    * @param  {string} fileName : string
    * @param  {object} fileContent :array of object
    * @return {object} returns : object
    */
    createIndex(fileName, fileContent) {
      const indices = {};
      if (!this.emptyArray(fileContent) &&
      this.invalidFile(fileContent) === false) {
        fileContent.forEach((element, index) => {
          const allText = element.text;
          const bookToken = this.getToken(allText);
          bookToken.forEach((token) => {
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
    getToken(text) {
      this.fileContent = text;
      text = text.replace(/[^A-Za-z0-9]/g, ' ');
      return text.toLowerCase()
      .split(/\s+/);
    }


 /**
  * invalidFile - checks for invalid json file
  * @param  {object} fileContent takes in an object
  * @return {boolean}   return a boolean(true)
  */
    invalidFile(fileContent) {
      this.fileContent = fileContent;
      let status = false;
      if (fileContent.some(arraryObject => arraryObject.title === undefined ||
          arraryObject.text === undefined)) {
        status = true;
      }

      return status;
    }
 /**
  * emptyArray - checks for empty json file
  * @param  {object} fileContent takes in an object
  * @return {boolean}  return boolean(true)
  */
    emptyArray(fileContent) {
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
    searchIndex(index, fileName, ...terms) {
      this.fileContent = fileName;
      const searchResult = {};
      fileName = Object.keys(index)[0];
      const eachKeys = Object.keys(index[fileName]);
      for (let i = 0; i < terms.length; i += 1) {
        let splitTerms = terms[i].toLowerCase();
        splitTerms = splitTerms.split(/[\s]/g);
        for (let j = 0; j < splitTerms.length; j += 1) {
          for (let indexes = 0; indexes < eachKeys.length; indexes += 1) {
            if (!(splitTerms[j] in index[fileName])) {
              Object.assign(searchResult, { [splitTerms[j]]: 'Not found!' });
            }
            if (splitTerms[j] === eachKeys[indexes]) {
              Object.assign(searchResult, { [splitTerms[j]]: index[fileName][eachKeys[indexes]] });
            }
          }
        }
      }
      return searchResult;
    }
  }
  export default InvertedIndex;
