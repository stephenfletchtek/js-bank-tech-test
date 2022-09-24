const Bank = require('./bank')

describe('Bank class', () => {
  beforeEach(() => {
    this.mockBankAccount = {};
    this.mockStatement = {};
    this.bank = new Bank(this.mockBankAccount, this.mockStatement);
    this.header = 'date || credit || debit || balance';
  })

  it('shows statement with single credit of 200', () => {
    const line1 = "\n20/09/2022 || 200.00 || || 200.00"
    this.mockBankAccount.test = true
    this.mockStatement.createStatement = (arg) => {
      if (arg.test == true) {
        return (this.header + line1);
      }
    }
    expect(this.bank.showStatement()).toEqual(this.header + line1);
  })

  it('deposit 200 into bank', () => {
    const date = new Date('2022-09-19')
    this.mockBankAccount.transact = (arg) => [date, arg]
    expect(this.bank.deposit(200)).toEqual([date, 200])
  })

  it('wrong number of arguments given', () => {
    expect(() => {
      this.bank.deposit();
    }).toThrow('method takes a positive number as an argument');
  });

  it('rejects zero deposit', () => {
    expect(() => {
      this.bank.deposit(0);
    }).toThrow('method takes a positive number as an argument')
  });

  it('negative deposit', () => {
    expect(() => {
      this.bank.deposit(-25);
    }).toThrow('method takes a positive number as an argument')
  });

})