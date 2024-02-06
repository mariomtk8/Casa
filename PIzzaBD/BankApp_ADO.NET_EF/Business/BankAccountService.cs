using BankApp.Data;
using BankApp.Models;

namespace BankApp.Business
{
    public class BankAccountService : IBankAccountService
    {
        private readonly IBankAccountRepository _repository;

        public BankAccountService(IBankAccountRepository repository)
        {
            _repository = repository;
        }

        public void MakeDeposit(string accountNumber, decimal amount, string note)
        {
            var account = _repository.GetAccount(accountNumber);
            if (account == null)
            {
                throw new KeyNotFoundException("Account not found.");
            }

            account.MakeDeposit(amount, DateTime.Now, note);
            _repository.UpdateAccount(account);
            _repository.SaveChanges();
        }

        public void MakeWithdrawal(string accountNumber, decimal amount, string note)
        {
            var account = _repository.GetAccount(accountNumber);
            if (account == null)
            {
                throw new KeyNotFoundException("Account not found.");
            }

            account.MakeWithdrawal(amount, DateTime.Now, note);
            _repository.UpdateAccount(account);
            _repository.SaveChanges();
        }

        public string GetAccountHistory(string accountNumber)
        {
            var account = _repository.GetAccount(accountNumber);
            if (account == null)
            {
                throw new KeyNotFoundException("Account not found.");
            }

            return account.GetAccountHistory();
        }

        // Métodos para crear cuenta, buscar cuenta, etc.

        public BankAccount GetBankAccount(string accountNumber)
        {
           // var account = _repository.GetAccount(accountNumber) ?? throw new KeyNotFoundException("Account not found.");
             var account = _repository.GetAccount(accountNumber);
             if (account is null) {
                throw new KeyNotFoundException("Account not found.");
             }
            
            return account;
        }

         public List<Transaction> GetTransactionsByAccount(string accountNumber)
        {
            // Suponiendo que BankAccountRepository tiene un método para obtener transacciones por cuenta
            var transactions = _repository.GetTransactionsByAccount(accountNumber);
            foreach(var transaction in transactions)
            {
                Console.WriteLine($"Transacción por {transaction.Amount} en cuenta {transaction.BankAccount.Number}");
            }
            if (transactions.Count == 0) 
            {
                    throw new KeyNotFoundException("Transactions not found.");
            }
            return transactions;
        }
    }
}
