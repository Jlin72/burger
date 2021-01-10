const orm = require('../config/orm');

const burger = {
    all(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    addToTable(column, value, cb) {
        orm.insertOne('burgers', column, value, (res) => {
            cb(res);
        });
    },
    update(column, value, idNumber, cb) {
        orm.updateOne('burgers', column, boolean, idNumber, (res)=> {
            cb(res);
        });
    },
};

module.exports = burger;