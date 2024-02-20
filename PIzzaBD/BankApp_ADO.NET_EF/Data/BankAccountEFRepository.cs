using BankApp.Models;
using Microsoft.EntityFrameworkCore;

namespace BankApp.Data
{
    public class BankAccountEFRepository : IBankAccountRepository
    {
        private readonly BankAppContext _context;

        public BankAccountEFRepository(BankAppContext context)
        {
            _context = context;
        }

        public void AddAccount(BankAccount account)
        {
            _context.BankAccounts.Add(account);
        }

        public BankAccount GetAccount(string accountNumber)
        {
            return _context.BankAccounts.FirstOrDefault(account => account.Number == accountNumber);
        }

        public void UpdateAccount(BankAccount account)
        {
            // En EF Core, si el objeto ya está siendo rastreado, actualizar sus propiedades
            // y llamar a SaveChanges() es suficiente para actualizarlo en la base de datos.
            // Asegúrate de que el estado del objeto sea 'Modified' si es necesario.
            _context.Entry(account).State = EntityState.Modified;
        }

        public void RemoveAccount(string accountNumber) {
            var account = GetAccount(accountNumber);
            if (account is null) {
                throw new KeyNotFoundException("Account not found.");
            }
            _context.BankAccounts.Remove(account);
            SaveChanges();

        }
        

        public void SaveChanges()
        {
            _context.SaveChanges();
        }


        public void GetTransactionsFromBankAccount(string accountNumber) {
            var transactions = _context.Transactions
                                .Where(t => t.BankAccountId == accountNumber)
                                .Include(t => t.BankAccount) // carga no lazy loading de BankAccount
                                .ToList();

            foreach(var transaction in transactions)
            {
                // Puedes acceder directamente a los detalles de la cuenta asociada sin una nueva consulta
                Console.WriteLine($"Transacción por {transaction.Amount} en cuenta {transaction.BankAccount.Number}");
            }

        }

        public List<Transaction> GetTransactionsByAccount(string accountNumber)
        {
            return _context.Transactions
                                .Where(t => t.BankAccountId == accountNumber)
                                .Include(t => t.BankAccount)
                                .ToList();
        }
    }   
}