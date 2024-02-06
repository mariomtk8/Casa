using Microsoft.AspNetCore.Mvc;

using BankApp.Data;
using BankApp.Models;
using BankApp.Business;

namespace BankApp.API.Controllers;

[ApiController]
[Route("[controller]")]
public class BankAccountController : ControllerBase
{
    
    private readonly ILogger<BankAccountController> _logger;
    private readonly IBankAccountService _bankAccountService;

    public BankAccountController(ILogger<BankAccountController> logger, IBankAccountService bankAccountService)
    {
        _logger = logger;
        _bankAccountService = bankAccountService;
    }

    [HttpGet]
        public IActionResult GetBankAccount()
        {
            var accountNumber = "1234567890";
            var bankaccount = _bankAccountService.GetBankAccount(accountNumber);
            _logger.LogError("hack");
            return (bankaccount is null) ?  NotFound() : Ok(bankaccount); //TODO manage exceptions with more error codes
            /*
            var account = _repository.GetAccount(accountNumber) ?? throw new KeyNotFoundException("Account not found.");
            if (bankaccount is null) return NotFound() else
            return Ok(bankaccount);
            */

            /*
            _bankAccountService.MakeDeposit(accountNumber, 1000,"Propina");
            _bankAccountService.MakeWithdrawal(accountNumber, 500, "Pago");
            string history = _bankAccountService.GetAccountHistory(accountNumber); 
            */
        }

     [HttpGet]
     [Route("Id")]
        public IActionResult GetBankAccount(string Id)
        {
            var bankaccount = _bankAccountService.GetBankAccount(Id);
            return (bankaccount is null) ?  NotFound() : Ok(bankaccount); //TODO manage exceptions with more error codes
            /*
            var account = _repository.GetAccount(accountNumber) ?? throw new KeyNotFoundException("Account not found.");
            if (bankaccount is null) return NotFound() else
            return Ok(bankaccount);
            */

            /*
            
            _bankAccountService.MakeDeposit(accountNumber, 1000,"Propina");
            _bankAccountService.MakeWithdrawal(accountNumber, 500, "Pago");
            string history = _bankAccountService.GetAccountHistory(accountNumber); 
            */
        }
}
