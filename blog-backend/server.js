const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/key');
const passport = require('passport');
//require("dotenv").config();

// setup express
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
// setup mongoose

mongoose.connect(
	config.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			console.log(err);
		}
		console.log('MongoDB connection success !!!');
	}
);

app.use(express.json());
app.use(passport.initialize()); // Should be used before express.Router always
// setup routes
express.Router().get('/hello', (req, res) => {
	res.send('Hello world');
});
app.use('/posts', require('./routes/postRoutes'));
app.use('/users', require('./routes/users'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'blog', 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'blog', 'build', 'index.html'));
	});
}

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
