using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BankApp.Models;

public class Transaction
{
    [Key]
    public int TransactionId { get; set; }

    [Column(TypeName = "decimal(18, 2)")]
    public decimal Amount { get; set;}
    public DateTime Date { get; set;}
    public string Note { get; set;}

    [ForeignKey("BankAccount")]
    public string BankAccountId { get; set; }
    // Propiedad de navegación
    public BankAccount BankAccount { get; set; }

    // EF Core requiere un constructor sin parámetros
    public Transaction() { }

    public Transaction(decimal amount, DateTime date, string note)
    {
        Amount = amount;
        Date = date;
        Note = note;
    }
}