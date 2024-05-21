const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
// const postRoutes = require('./routes/postRoutes');
dotenv.config();

const app = express();
app.use(express.json());
const verifyToken = require('./middleware/verifyToken');
app.use(verifyToken);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/posts', postRoutes);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
