const {Schema, model} = require('mongoose');

const PostSchema = new Schema ({
    title: {type: String, required: true, maxlength: 100},
    content: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});


module.exports = model('Post', PostSchema);