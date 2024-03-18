// Create web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Display the comments
// 4. Create a route for /comment
// 5. Add a new comment
// 6. Create a form to add a new comment
// 7. Create a route for /delete
// 8. Delete a comment
// 9. Create a form to delete a comment
// 10. Create a route for /edit
// 11. Edit a comment
// 12. Create a form to edit a comment
// 13. Create a route for /like
// 14. Like a comment

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
  res.send('Display the comments');
});

// 4. Create a route for /comment
app.get('/comment', (req, res) => {
  res.send('Add a new comment');
});

// 6. Create a form to add a new comment
app.get('/comment/new', (req, res) => {
  res.send(`
    <form action="/comment" method="POST">
      <input type="text" name="comment" />
      <input type="submit" />
    </form>
  `);
});

// 5. Add a new comment
app.post('/comment', (req, res) => {
  res.send('Add a new comment');
});

// 7. Create a route for /delete
app.get('/delete', (req, res) => {
  res.send('Delete a comment');
});

// 9. Create a form to delete a comment
app.get('/delete/:id', (req, res) => {
  res.send(`
    <form action="/delete" method="POST">
      <input type="hidden" name="id" value="${req.params.id}" />
      <input type="submit" />
    </form>
  `);
});

// 8. Delete a comment
app.post('/delete', (req, res) => {
  res.send('Delete a comment');
});

// 10. Create a route for /edit