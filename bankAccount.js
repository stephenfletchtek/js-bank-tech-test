class BankAccount {
  constructor(openingBalance = 0, date = Date) {
    this.date = date
    this.openingBalance = openingBalance
    this.transactions = []
  }

  transact(amount) {
    const date = this.date.now()
    this.transactions.push([date, amount])
    return ([date, amount])
  }

  allTransactions() {
    let accumulator = this.openingBalance
    const sorted = this.transactions.sort()
    return sorted.map(transaction => {
      transaction.push(accumulator += transaction[1])
    })
  }
}

module.exports = BankAccount;
