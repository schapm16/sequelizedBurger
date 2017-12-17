var orm = require('../config/orm.js');

var burger = {
    viewAll: function(ctrlCB) {
        orm.selectAll(function(data) {
            ctrlCB(data);
        });
    },

    new: function(burgerName, ctrlCB) {
        orm.insertOne(burgerName, function() {
            orm.selectAll(function (data) {
                ctrlCB(data);
            });
        });
    },

    devour: function(burgerId, ctrlCB) {
        orm.updateOne(burgerId, function() {
            orm.selectAll(function (data) {
                console.log(data);
                ctrlCB(data);
            });
        });
    }
};

module.exports = burger;
