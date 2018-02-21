const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and model and then export it

const JusticeLeagueSchema = new Schema({
    name: String,
    power: Number
});

const JusticeLeagueChar = mongoose.model('jlchar', JusticeLeagueSchema);

module.exports = JusticeLeagueChar;