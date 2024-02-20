CREATE DATABASE BankAppDB;

USE BankAppDB;

-- Crear la tabla BankAccount
CREATE TABLE BankAccounts (
    Number NVARCHAR(50) PRIMARY KEY,
    Owner NVARCHAR(100) NOT NULL,
    Balance DECIMAL(18, 2) NOT NULL
);

-- Crear la tabla Transaction
CREATE TABLE Transactions (
    TransactionId INT IDENTITY(1,1) PRIMARY KEY,
    Amount DECIMAL(18, 2) NOT NULL,
    Date DATETIME NOT NULL,
    Note NVARCHAR(500),
    AccountNumber NVARCHAR(50) NOT NULL,
    CONSTRAINT FK_Transactions_BankAccounts FOREIGN KEY (AccountNumber) REFERENCES BankAccounts(Number)
);

INSERT INTO BankAccounts (Number, Owner, Balance)
VALUES ('1234567890', 'John Doe', 1000.00),
       ('0987654321', 'Jane Doe', 1500.50);


INSERT INTO Transactions (Amount, Date, Note, AccountNumber)
VALUES (200.00, '2021-01-01 10:00:00', 'Depósito inicial', '1234567890'),
       (300.00, '2021-01-02 11:00:00', 'Depósito', '1234567890'),
       (-150.00, '2021-01-03 09:30:00', 'Retiro', '1234567890'),
       (400.00, '2021-01-04 14:00:00', 'Depósito', '0987654321');