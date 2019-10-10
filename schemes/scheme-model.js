const db = require('../data/db.js');

module.exports = {
    find,
    findById,
    findSteps
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}
function findSteps(id) {
    return db('schemes')
    .select([
        'schemes.scheme_name',
        'steps.step_number',
        'steps.scheme_id',
        'steps.instructions'
    ])
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .where({ 'schemes.id':id }).first();
}