import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON bodies

// Root Route
app.get('/', (req, res) => {
  res.send('Hello, welcome to the API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
