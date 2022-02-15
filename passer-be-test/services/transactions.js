const transactionsModel = require('../models/transactions')



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
        return transactionsModel.createTransaction(pk_transaction, fk_user,description, amount);
    }
    catch (e) {
        throw new Error(e)
    }
}



module.exports = {
    createTransaction
}