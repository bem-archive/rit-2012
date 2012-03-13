var INHERIT = require('inherit');

exports.baseLevelPath = require.resolve('./blocks/.bem/level.js');

var Level = exports.Level = INHERIT({
    'get-block' : function(block) {
        return block;
    }
})
