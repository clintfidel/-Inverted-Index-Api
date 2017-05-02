<<<<<<< HEAD

/**
 * global ClassDeclaration
 */
 const InvertedIndex = {
   constructor() {
     this.indicies = {};
   },
   /**
    * createIndex - description
    *
    * @param  {object} req description
    * @param  {object} res description
    * @return {object}     description
    */
   createIndex(req, res) {
     if (!req.body) {
       return res.send('There is no content to create index for');
     }
     const fileContent = req.body;
     const indices = {};
     fileContent.forEach((element, index) => {
       const allText = `${element.title} ${element.text}`;
       const bookToken = InvertedIndex.getToken(allText);
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
     return res.json(indices);
   },

   /**
    * getToken - description
    *
    * @param  {type} text description
    * @return {type}      description
    */
   getToken(text) {
     return text.toLowerCase()
   .split(/\s+/);
   }

 };
 export default InvertedIndex;
=======
class invertedIndex {
  createIndex(req, res) {
    res.send('welcome to my first api');
  }
}
>>>>>>> 753d8b0741a72e8f0f2595e6bfe46eb3fae0d1de
