const BankAccount = require('./bankAccount')
const Statement = require('./statement')

class Bank {
  constructor(bankAccount = new BankAccount, statement = new Statement) {
    this.bankAccount = bankAccount
    this.statement = statement
  }

  showStatement() {
    return this.statement.createStatement(this.bankAccount)
  }

  deposit(amount) {
    this.#checkArgs(amount)
    return this.bankAccount.transact(amount)
  }

  withdraw(amount) {
    this.#checkArgs(amount)
    return this.bankAccount.transact(-amount)
  }

  #checkArgs(arg) {
    if (isNaN(arg) || arg <= 0) {
      throw 'method takes a positive number as an argument'
    }
  }
}

module.exports = Bank;
