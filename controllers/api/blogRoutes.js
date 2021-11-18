const router = require('express').Router();
// /api/blog
router.get('/', (req, res) => {
    // Send a message to the client
    res.status(200).json(`${req.method} request received to get blog entries`);
  
    // Log our request to the terminal
    console.info(`${req.method} request received to get blog entries`);
  });
  
  // POST request to add a review
//   /api/blog
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a blog entry`);
  
    // Destructuring assignment for the items in req.body
    const { blogEntry, articleName } = req.body;
  
    // If all the required properties are present
    if (blogEntry && articleName) {
      // Variable for the object we will save
      const newBlogEntry = {
   //     product,
        blogEntry,
        articleName,
   //     review_id: uuid(),
      };
  
      // to create file blogEntries.js
      // fs.readFile('./seeds/blogEntries.json', 'utf8', (err, data) => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     // Convert string into JSON object
      //     const parsedBlogEntries = JSON.parse(data);
  
      //     // Add a new blog entry
      //     parsedBlogEntries.push(newBlogEntry);
  
      //     // Write updated blog entries back to the file
      //     fs.appendFile(
      //       './seeds/blogEntries.json',
      //       JSON.stringify(parsedBlogEntries, null, 4),
      //       (writeErr) =>
      //         writeErr
      //           ? console.error(writeErr)
      //           : console.info('Successfully updated blog!')
      //     );
      //   }
      // });
  
      const response = {
        status: 'success',
        body: newBlogEntry,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting your entry');
    }
  });
// /api/blog/draft
  router.post('/draft', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to save a draft`);
    console.log(req.body);
    // Destructuring assignment for the items in req.body
    const { draftEntry, draftName } = req.body;
  
    // If all the required properties are present
    if (draftEntry && draftName) {
      // Variable for the object we will save
      const newDraft = {
   //     product,
      draftEntry, 
      draftName,
   //     review_id: uuid(),
      };
  
      // to create file blogEntries.js
      // fs.readFile('./seeds/draftEntries.json', 'utf8', (err, data) => {
      //   if (err) {
      //     console.error(err);
      //   } else {
      //     // Convert string into JSON object
      //     const parsedDraftEntries = JSON.parse(data);
  
      //     // Add a new blog entry
      //     parsedDraftEntries.push(newDraft);
  
      //     // Write updated blog entries back to the file
      //     fs.appendFile(
      //       './seeds/draftEntries.json',
      //       JSON.stringify(parsedDraftEntries, null, 4),
      //       (writeErr) =>
      //         writeErr
      //           ? console.error(writeErr)
      //           : console.info('Successfully updated draft!')
      //     );
      //   }
      // });
  
      const response = {
        status: 'success',
        body: newDraft,
      };
  
      console.log(response);
      res.status(200).json(response);
    } else {
      res.status(500).json('Error in saving your draft');
    }
  });

module.exports = router