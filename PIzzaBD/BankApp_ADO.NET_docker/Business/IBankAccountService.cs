
using BankApp.Models;

namespace BankApp.Business
{
    public interface IBankAccountService
    {
        void MakeDeposit(string accountNumber, decimal amount, string note);
        void MakeWithdrawal(string accountNumber, decimal amount, string note);
        string GetAccountHistory(string accountNumber);

        public BankAccount GetBankAccount(string accountNumber);

    }
}
