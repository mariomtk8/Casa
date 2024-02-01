using System.Text.Json;
using System.Data.SqlClient;
using BankApp.Models;
using System.Data;

namespace BankApp.Data
{
    public class BankAccountSqlRepository : IBankAccountRepository
    {

        private readonly string _connectionString;

        public BankAccountSqlRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        
        public void AddAccount(BankAccount account)
        {
           //INSERT INTO SQL STRING
        }

//TODO ASYNC & LIST<BankAccount>
        public BankAccount GetAccount(string accountNumber)
        {
            var account = new BankAccount();

            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sqlString = "SELECT Number, Owner FROM BankAccounts WHERE Number=" + accountNumber;
                var command = new SqlCommand(sqlString, connection);

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        account = new BankAccount
                        {
                            Number = reader["Number"].ToString(),
                            Owner = reader["Owner"].ToString(),
                            //Balance = (decimal)reader[2]
                        };
                    }
                }
                
            }

            return account;
        }

        public void UpdateAccount(BankAccount account)
        {
            //UPDATE SQL STRING
        }

        public void SaveChanges()
        {
            //DO NOTHING (BY NOW)
        }

    }
}
