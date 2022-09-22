class BankAccount {
  constructor(openingBalance = 0, date = Date) {
    this.date = date
    this.openingBalance = openingBalance
    this.transactions = []
  }

  transact(amount) {
    const date = this.date.getTime()
    this.transactions.push([date, amount])
    return ([date, amount])
  }

  allTransactions() {
    let accumulator = this.openingBalance
    const sorted = this.transactions.sort().map(element => [...element])
    sorted.forEach(element => {
      accumulator += element[1]
      element.push(accumulator)
    })
    return sorted
  }
}

module.exports = BankAccount;
