const mongoose = require('mongoose');

mongoose.plugin(schema => { schema.options.usePushEach = true });
// This resolved a version problem while populating tasks to project -> font: https://stackoverflow.com/questions/48607918/mongoerror-unknown-modifier-pushall-in-node-js

mongoose.connect('mongodb://localhost/noderest', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;