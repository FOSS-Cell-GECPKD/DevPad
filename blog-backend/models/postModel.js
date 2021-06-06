const mongoose = require('mongoose');
const user = require('./users');

const postSchema = mongoose.Schema({
	// this is a reference to the user document and the
	// author can be retreieved from the reference
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: user,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Number,
		required: true,
	},
	tags: {
		type: [String],
	},
	html: {
		type: String,
		required: true,
	},
});

module.exports = Post = mongoose.model('post', postSchema);
