using System.Text.Json;
using BankApp.Models;

namespace BankApp.Data
{
    public class BankAccountRepository : IBankAccountRepository
    {
        private Dictionary<string, BankAccount> _accounts = new Dictionary<string, BankAccount>();
        private readonly string _filePath = "bankAccounts.json";

        public BankAccountRepository()
        {
            LoadAccounts();
        }
        public void AddAccount(BankAccount account)
        {
            _accounts[account.Number] = account;
        }

        public BankAccount GetAccount(string accountNumber)
        {
            return _accounts.TryGetValue(accountNumber, out var account) ? account : null;
        }

        public void UpdateAccount(BankAccount account)
        {
            _accounts[account.Number] = account;
        }

        public void SaveChanges()
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            string jsonString = JsonSerializer.Serialize(_accounts.Values, options);
            File.WriteAllText(_filePath, jsonString);
        }

        private void LoadAccounts()
        {
            BankAccount bankAccount = new BankAccount("Alex",100);
            //_accounts.Add("123456",bankAccount);
            _accounts.Add(bankAccount.Number, bankAccount);

            if (File.Exists(_filePath))
            {
                string jsonString = File.ReadAllText(_filePath);
                var accounts = JsonSerializer.Deserialize<IEnumerable<BankAccount>>(jsonString);
                _accounts = accounts.ToDictionary(acc => acc.Number);
            }
           
        }
    }
}
