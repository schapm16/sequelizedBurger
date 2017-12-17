module.exports = function(sequalize, Datatypes) {
    
    var BurgersSequelized = sequelize.define('burgersSequelized', {
        
        burger_name: Datatypes.STRING,
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false, 
        }
    });
};









// var orm = require('../config/orm.js');

// var burger = {
//     viewAll: function(ctrlCB) {
//         orm.selectAll(function(data) {
//             ctrlCB(data);
//         });
//     },

//     new: function(burgerName, ctrlCB) {
//         orm.insertOne(burgerName, function() {
//             orm.selectAll(function (data) {
//                 ctrlCB(data);
//             });
//         });
//     },

//     devour: function(burgerId, ctrlCB) {
//         orm.updateOne(burgerId, function() {
//             orm.selectAll(function (data) {
//                 console.log(data);
//                 ctrlCB(data);
//             });
//         });
//     }
// };

// module.exports = burger;
