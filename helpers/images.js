var models = require('../models');


function imageFind() {
    var res = null;
    models.Image.find({}, {}, { limit: 9, sort: { likes: -1 } },
        function (err, images) {
            if (err) throw err;
            res = images;
        });
    return res;
}

module.exports = {
    popular: imageFind
};