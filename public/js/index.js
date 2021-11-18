// const newBlogEntry
// const attachEntry //includes fetch, .then

// have eventlisteners to attach them to the form when it is submitted
// when it is submitted set newBlogEntry variable to whatever user filled out
// after that fetch request use post method to api route 
// POST route will be /api/blog blogRoutes.js file

// const blogEntryForm = document.getElementById('blogEntry-form');
// const blogEntrysContainer = document.getElementById('blogEntry-container');
// const fbBtn = document.getElementById('feedback-btn');

// fbBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   window.location.href = '/feedback';
// });

// const createCard = (blogEntry) => {
//   // Create card
//   const cardEl = document.createElement('div');
//   cardEl.classList.add('card', 'mb-3', 'm-3');
//   cardEl.setAttribute('key', blogEntry.blogEntry_id);

//   // Create card header
//   const cardHeaderEl = document.createElement('h4');
//   cardHeaderEl.classList.add(
//     'card-header',
//     'bg-primary',
//     'text-light',
//     'p-2',
//     'm-0'
//   );
//   cardHeaderEl.innerHTML = `${blogEntry.articleName} </br>`;

//   // Create card body
//   const cardBodyEl = document.createElement('div');
//   cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
//   cardBodyEl.innerHTML = `<p>${blogEntry.blogEntry}</p>`;

//   // Append the header and body to the card element
//   cardEl.appendChild(cardHeaderEl);
//   cardEl.appendChild(cardBodyEl);

//   // Append the card element to the blogEntrys container in the DOM
//   blogEntrysContainer.appendChild(cardEl);
// };

// // Get a list of existing blogEntrys from the server
// const getblogEntrys = () =>
//   fetch('/api/blogEntrys', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// // Post a new blogEntry to the page
// const postblogEntry = (blogEntry) =>
//   fetch('/api/blogEntrys', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogEntry),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       alert(data);
//       createCard(blogEntry);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

// // When the page loads, get all the blogEntrys
// getblogEntrys().then((data) => data.forEach((blogEntry) => createCard(blogEntry)));

// // Function to validate the blogEntrys that were submitted
// // TODO: Use this function to validate the form data. Accepts an object with {articleName, topic, blogEntry}. Returns { isValid: boolean, and errors: Object }
 const validateblogEntry = (newblogEntry) => {
   const { articleName, blogEntry } = newblogEntry;

   // Object to hold our error messages until we are ready to return
   const errorState = {
     articleName: '',
     blogEntry: '',
   };

  // Bool value if the articleName is valid
  const utest = articleName.length >= 4;
  if (!utest) {
    errorState.articleName = 'Invalid articleName!';
  }

  // Bool value to see if the blogEntry being added is at least 15 characters long
  const blogEntryContentCheck = blogEntry.length > 15;
  if (!blogEntryContentCheck) {
    errorState.blogEntry = 'blogEntry must be at least 15 characters';
  }

  const result = {
    isValid: !!(utest && blogEntryContentCheck && topicCheck),
    errors: errorState,
  };

  // Return result object with a isValid boolean and an errors object for any errors that may exist
  return result;
};

// // Helper function to deal with errors that exist in the result
// const showErrors = (errorObj) => {
//   const errors = Object.values(errorObj);
//   errors.forEach((error) => {
//     if (error.length > 0) {
//       alert(error);
//     }
//   });
// };

// Helper function to send a POST request to the diagnostics route (/api/diagnostics)
const submitBlog = (submissionObj) => {
  // TODO: your code here
  console.info(
    '⚠️ Create the logic for the fetch POST request in scripts/index.js'
  );
  alert('Add your logic to scripts/index.js');
};

// // Function to handle when a user submits the feedback form
const handleFormSubmit = (e) => {
    e.preventDefault();
   console.log('Form submit invoked');

   // Get the value of the blogEntry and save it to a variable
   const blogEntryContent = document.getElementById('blogEntryText').value;

   // get the value of the articleName and save it to a variable
   const blogEntryarticleName = document.getElementById('blogEntryarticleName').value.trim();

  // Create an object with the blogEntry and articleName
  const newblogEntry = {
    articleName: blogEntryarticleName,
    topic: 'UX',
    blogEntry: blogEntryContent,
  };

  // Run the blogEntry object through our validator function
  const submission = validateblogEntry(newblogEntry);

  // If the submission is valid, post the blogEntry. Otherwise, handle the errors.
  return submission.isValid ? postblogEntry(newblogEntry) : submitBlog(submission);
};

// Listen for when the form is submitted
blogEntryForm.addEventListener('submit', handleFormSubmit);
