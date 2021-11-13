const sdv = require('sportsdataverse');
const express = require('express');
const path = require('path');
const fs = require('fs');
// we do not need uuid here but keeping it here in case we need it
// const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // what is extended: true just cannot recall it

app.use(express.static('public'));
// do not see index.html in public folder yet
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for blog entries suggest to delete userRoutes.js, projectRoutes.js
app.get('controllers/api/', (req, res) => {
  // Send a message to the client
  res.status(200).json(`${req.method} request received to get blog entries`);

  // Log our request to the terminal
  console.info(`${req.method} request received to get blog entries`);
});

// POST request to add a review
app.post('controllers/api/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a blog entry`);

  // Destructuring assignment for the items in req.body
  const { blogEntry, username } = req.body;

  // If all the required properties are present
  if (blogEntry && username) {
    // Variable for the object we will save
    const newBlogEntry = {
 //     product,
      blogEntry,
      username,
 //     review_id: uuid(),
    };

    // to create file blogEntries.js
    fs.readFile('./seeds/blogEntries.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedBlogEntries = JSON.parse(data);

        // Add a new blog entry
        parsedBlogEntries.push(newBlogEntry);

        // Write updated blog entries back to the file
        fs.appendFile(
          './seeds/blogEntries.json',
          JSON.stringify(parsedBlogEntries, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated blog!')
        );
      }
    });

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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
