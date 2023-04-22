using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Data
{
    public class InvoiceContext : DbContext
    {
        public InvoiceContext(DbContextOptions<InvoiceContext> options) : base(options) { }

        public DbSet<Invoice> Invoice { get; set; }

    }
}
