const { postgresql } = require('../databases/postgresql')

/**
 * Create an specific transaction
 * @param {number} pk_transaction transaction primary key
 * @param {number} fk_user transaction foreign key users
 * @param {string} description transaction description
 * @param {number} amount transaction amount
 * @returns {{pk_transaction: 1,fk_user:123,description:"nueva", amount: 1213}}
 */
const createTransaction = (pk_transaction,fk_user,description, amount) => {
    try {
        let transaction = postgresql.public.one(`insert into transactions values ('${pk_transaction}', '${fk_user}', '${description}', '${amount}') returning *;`);
        return transaction
    }
    catch (e) {
        throw new Error(e)
    }
}


module.exports = {
    createTransaction,
}