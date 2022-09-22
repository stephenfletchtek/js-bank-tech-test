const BankAccount = require('./bankAccount')

describe('BankAccount class', () => {
  it('has 0 opening balance', () => {
    const bankAccount = new BankAccount;
    expect(bankAccount.openingBalance).toBe(0);
  })

  it('opens with 100 balance', () => {
    const bankAccount = new BankAccount(100);
    expect(bankAccount.openingBalance).toBe(100);
  })

  it('has no transactions', () => {
    const bankAccount = new BankAccount;
    expect(bankAccount.allTransactions()).toEqual([])
  })

  it('adds 200 on 20/09/2022', () => {
    const date = new Date('2022-09-20')
    const bankAccount = new BankAccount(0, date);
    expect(bankAccount.transact(200)).toEqual([date.valueOf(), 200])
    expect(bankAccount.allTransactions()).toEqual([[date.valueOf(), 200, 200]])
  })

  it('adds 100 on 20/09/2022', () => {
    const date = new Date('2022-09-20')
    const bankAccount = new BankAccount(0, date);
    expect(bankAccount.transact(100)).toEqual([date.valueOf(), 100])
    expect(bankAccount.allTransactions()).toEqual([[date.valueOf(), 100, 100]])
  })

  it('withdraws 100 on 20/09/2022', () => {
    const date = new Date('2022-09-20')
    const bankAccount = new BankAccount(0, date);
    expect(bankAccount.transact(-100)).toEqual([date.valueOf(), -100])
    expect(bankAccount.allTransactions()).toEqual([[date.valueOf(), -100, -100]])
  })

  it('adds 50 + 150 on 20/09/2022', () => {
    const date = new Date('2022-09-20')
    const bankAccount = new BankAccount(0, date);
    expect(bankAccount.transact(50 + 150)).toEqual([date.valueOf(), 200])
    expect(bankAccount.allTransactions()).toEqual([[date.valueOf(), 200, 200]])
  })

  it('adds 200 on 19/09/2022 and 100 on 20/09/2022', () => {
    const date1 = new Date('2022-09-19')
    const date2 = new Date('2022-09-20')
    const mockDate = {}
    const bankAccount = new BankAccount(0, mockDate);
    mockDate.getTime = () => date1.valueOf()
    expect(bankAccount.transact(200)).toEqual([date1.valueOf(), 200])
    mockDate.getTime = () => date2.valueOf()
    expect(bankAccount.transact(100)).toEqual([date2.valueOf(), 100])
    expect(bankAccount.allTransactions()).toEqual([[date1.valueOf(), 200, 200], [date2.valueOf(), 100, 300]])
  })

  it('adds 90 on 19/09/2022 and 100 on 20/09/2022', () => {
    const date1 = new Date('2022-09-19')
    const date2 = new Date('2022-09-20')
    const mockDate = {}
    const bankAccount = new BankAccount(0, mockDate);
    mockDate.getTime = () => date1.valueOf()
    expect(bankAccount.transact(90)).toEqual([date1.valueOf(), 90])
    mockDate.getTime = () => date2.valueOf()
    expect(bankAccount.transact(100)).toEqual([date2.valueOf(), 100])
    expect(bankAccount.allTransactions()).toEqual([[date1.valueOf(), 90, 90], [date2.valueOf(), 100, 190]])
  })
})
