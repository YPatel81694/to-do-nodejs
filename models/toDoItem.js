//sequelize to-do item model 
module.exports = (sequelize, Sequelize) => {
    const item = sequelize.define("item", {
        itemName: {
            type: Sequelize.STRING
        },
        itemStatus: {
            type: Sequelize.BOOLEAN
        }
    });

    return item;
};