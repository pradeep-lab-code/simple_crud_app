const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://hlopradeep7_db_user:ST1Y3rass5HoSjqD@backenddb.nfdmube.mongodb.net/?appName=BackendDB'
)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.get('/', (req, res) => {
  res.send('Hello from Node Api Server')
})

