using BankApp.Data;
using BankApp.Business;
using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IBankAccountService, BankAccountService>();

//builder.Services.AddScoped<IBankAccountRepository, BankAccountRepository>();
//builder.Services.AddScoped<IBankAccountRepository, BankAccountSqlRepository>();
//serviceCollection.AddSingleton<IBankAccountRepository, BankAccountRepository>();

// Obteniendo la cadena de conexión desde appsettings.json
var connectionString = builder.Configuration.GetConnectionString("ServerDB");

builder.Services.AddDbContext<BankAppContext>(options =>
    options.UseSqlServer(connectionString));
  builder.Services.AddScoped<IBankAccountRepository, BankAccountEFRepository>();
  
/*
builder.Services.AddScoped<IBankAccountRepository, BankAccountSqlRepository>(serviceProvider => 
    new BankAccountSqlRepository(connectionString));
*/

/*
// Add services to the container.
 var configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .Build();


  // Configurar el contenedor de servicios
        var serviceProvider = new ServiceCollection()
            .AddSingleton<IConfiguration>(configuration)
            .AddScoped<BankAccountSqlRepository>(provider =>
                new BankAccountSqlRepository(configuration.GetConnectionString("ServerDB")))
            .BuildServiceProvider();
*/
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment()) //DISABLE DUE TO CONTAINERING APP
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
