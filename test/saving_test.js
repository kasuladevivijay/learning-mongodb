const assert = require('assert');
const JusticeLeagueChar = require('../models/justice-league');
// Describe the tests

describe('Saving the data to MongoDB', () => {
    // tests
    it('should save the record to the collection', (done) => {
        
        var jlChar = new JusticeLeagueChar({
            name: 'Batman',
            power: 100
        });
        jlChar.save().then(function(){
            assert(jsChar.isNew === false);
        });
        done();
    });
});
