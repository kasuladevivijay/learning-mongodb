const assert = require('assert');
const JusticeLeagueChar = require('../models/justice-league');

// Note: save() method applies on instance of a Model whereas 
// find(), findOne() are applied on the actual Model itself

describe('Finding the saved data', () => {

    var jlChar;
    beforeEach((done) => {
        jlChar = new JusticeLeagueChar({
            name: 'Batman',
            power: 100
        });
        jlChar.save().then(function () {});
        done();
    });

    it('should find the one record from the db...', (done) => {
        JusticeLeagueChar.findOne({
            name: 'Batman'
        }).then((result) => {
            assert(result.name === 'Batman');
        });
        done();
    });

    it('should find one record by ID...', (done) => {
        JusticeLeagueChar.findOne({
            _id: jlChar._id
        }).then((result)=>{
            assert(result._id.toString() === jlChar._id.toString());
        });
        done();
    });
});