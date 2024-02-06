using BankApp.Models;
using BankApp.Business;
using BankApp.Data;
using Microsoft.Extensions.DependencyInjection;

var serviceCollection = new ServiceCollection();
serviceCollection.AddTransient<IBankAccountService, BankAccountService>();
serviceCollection.AddSingleton<IBankAccountRepository, BankAccountRepository>();

var serviceProvider = serviceCollection.BuildServiceProvider();
var bankAccountService = serviceProvider.GetService<IBankAccountService>();
bankAccountService?.MakeDeposit("1", 1000, "Propina");
bankAccountService?.MakeWithdrawal("1", 500, "Pago");
Console.WriteLine(bankAccountService?.GetAccountHistory("1"));

/*
var bankAccountRepository = new BankAccountRepository();
var bankAccountService = new BankAccountService(bankAccountRepository);
bankAccountService.MakeDeposit("1", 1000,"Propina");
bankAccountService.MakeWithdrawal("1", 500, "Pago");
Console.WriteLine(bankAccountService.GetAccountHistory("1")); 
*/

BankAccount bankAccount = new BankAccount("Alex",100);
var tostring = bankAccount.ToString();
try {
    bankAccount.MakeDeposit(100,DateTime.Now,"Abrir cuenta");
} catch (Exception e) {
    Console.WriteLine(e.ToString());
}

try {
    bankAccount.MakeWithdrawal(100,DateTime.Now,"Pago alquiler");
} catch (ArgumentOutOfRangeException e) {
    Console.WriteLine(e.ToString());
} catch (InvalidOperationException e) {
    Console.WriteLine(e.ToString());
}

string history = bankAccount.GetAccountHistory();
Console.WriteLine(history); 


try {
    BankAccount bankacc = new BankAccount("Rubén",100);
    bankacc.MakeDeposit(100,DateTime.Now,"Propina");
    bankacc.MakeWithdrawal(100,DateTime.Now,"Pago seguro");
    bankacc.MakeWithdrawal(50,DateTime.Now,"Luz");
    Console.WriteLine(bankacc.GetAccountHistory()); 
} catch (ArgumentOutOfRangeException e) {
    Console.WriteLine("ArgumentOutOfRangeException: " + e.ToString());
} catch (InvalidOperationException e) {
    Console.WriteLine("InvalidOperationException: " + e.ToString());
}
