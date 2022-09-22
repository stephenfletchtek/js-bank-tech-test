class Statement {
  createStatement(bankAccount) {
    const outputList = this.#formatTransactionList(bankAccount)
    outputList.push('date || credit || debit || balance')
    return outputList.reverse().join("\n")
  }

  #dateMonth(date) {
    if (date.getMonth() < 9) {
      return `0${date.getMonth() + 1}`
    } else {
      return `${date.getMonth() + 1}`
    }
  }

  #formatDate(date) {
    return `${date.getDate()}/${this.#dateMonth(date)}/${date.getFullYear()}`
  }

  #creditOrDebit(amount) {
    if (amount > 0) {
      return ` || ${amount.toFixed(2)} || || `
    } else {
      return ` || || ${-amount.toFixed(2)} || `
    }
  }

  #formatTransactionList(bankAccount) {
    return bankAccount.allTransactions().map(line =>
      `${this.#formatDate(line[0])}${this.#creditOrDebit(line[1])}${line[2].toFixed(2)}`
    )
  }
}

module.exports = Statement;
