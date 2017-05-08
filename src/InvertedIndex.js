/**
 * global class declaration
 */
 export default class InvertedIndex {
 /**
  * constructor - takes in json file
  * @return {type}  description
  */
   constructor() {
     this.indices = {};
     this.fileContent = '';
   }
 /**
  * createIndex - creates index for json files e.g of:[0,1,2,3,4]
  * @param  {string} fileName    description
  * @param  {object} fileContent description
  * @return {object}   returns
  */
   createIndex(fileName, fileContent) {
     const indices = {};
     if (!this.emptyArray(fileContent) &&
    this.invalidFile(fileContent) === false) {
       fileContent.forEach((element, index) => {
         const allText = `${element.title} ${element.text}`;
         const bookToken = this.getToken(allText);
         bookToken.forEach((token) => {
           if (token in indices) {
             const tokenResult = indices[token];
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
   getToken(text) {
     this.fileContent = text;
     return text.toLowerCase() // turns to lower case
     .split(/\s+/);  // splits by spaces
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
   * @param  {Object} fileContent: object
   * @param  {string} terms:string, rest operator turn it to an array
   * @return {Object}             description
   **/
   searchIndex(fileContent, ...terms) {
     const searchResult = {};
     const eachKey = this.createIndex('boy', fileContent);
     const eachKeys = Object.keys(eachKey);
     for (let i = 0; i < terms.length; i += 1) {
       let splitTerms = terms[i].toLowerCase();
       splitTerms = splitTerms.split(/[\s]/g);
       for (let j = 0; j < splitTerms.length; j += 1) {
         for (let index = 0; index < eachKeys.length; index += 1) {
           if (!(splitTerms[j] in eachKey)) {
             Object.assign(searchResult, { [splitTerms[j]]: 'Not found' });
           }
           if (splitTerms[j] === eachKeys[index]) {
             Object.assign(searchResult, { [splitTerms[j]]: eachKey[eachKeys[index]] });
           }
         }
       }
     }
     return searchResult;
   }
 }
