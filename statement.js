class Statement {
  createStatement(bankAccount) {
    const outputList = this.#formatTransactionList(bankAccount)
    outputList.push('date || credit || debit || balance')
    const result = outputList.reverse().join("\n")
    return result
  }

  #twoDecPl(num) {
    return num.toFixed(2)
  }

  #creditOrDebit(amount) {
    if (amount > 0) {
      return ` || ${twoDecPl(amount)} || || `
    } else {
      return ` || || ${twoDecPl(-amount)} || `
    }
  }

  #formatTransactionList(bankAccount) {
    const result = bankAccount.allTransactions().map(line => `${line[0].getDate()}/${line[0].getMonth() + 1}/${line[0].getFullYear()} ${this.#creditOrDebit(line[1])} ${this.#twoDecPl(line[2])}`)
    return result
  }
}

module.exports = Statement;
