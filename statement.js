class Statement {
  createStatement(bankAccount) {
    const outputList = this.#formatTransactionList(bankAccount)
    outputList.push('date || credit || debit || balance')
    return outputList.reverse().join("\n")
  }

  #padding(num) {
    let padding = ""
    if (num < 10) {
      padding = 0
    }
    return `${padding}${num}`
  }

  #formatDate(date) {
    const day = this.#padding(date.getDate())
    const month = this.#padding(date.getMonth() + 1)
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  #creditOrDebit(amount) {
    if (amount > 0) {
      return ` || ${amount.toFixed(2)} || || `
    } else {
      return ` || || ${(-amount).toFixed(2)} || `
    }
  }

  #formatTransactionList(bankAccount) {
    return bankAccount.allTransactions().map(line =>
      `${this.#formatDate(line[0])}${this.#creditOrDebit(line[1])}${line[2].toFixed(2)}`
    )
  }
}

module.exports = Statement;
