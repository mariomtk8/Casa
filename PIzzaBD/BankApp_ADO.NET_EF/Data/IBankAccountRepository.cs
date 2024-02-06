using BankApp.Models;

namespace BankApp.Data
{
    public interface IBankAccountRepository
    {
        void AddAccount(BankAccount account);
        BankAccount GetAccount(string accountNumber);
        void UpdateAccount(BankAccount account);
        void SaveChanges();   

        List<Transaction> GetTransactionsByAccount(string accountNumber);

    }
}
