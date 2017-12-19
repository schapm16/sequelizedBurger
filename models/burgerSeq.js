module.exports = function(sequelize, Datatypes) {

  var BurgerSeq = sequelize.define('burgerSeq', {

    burger_name: Datatypes.STRING,
    devoured: {
      type: Datatypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    freezeTableName: true
  });

  return BurgerSeq;
};