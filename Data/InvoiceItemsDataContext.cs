using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Data
{
    public class InvoiceItemsDataContext : DbContext
    {
        public InvoiceItemsDataContext(DbContextOptions<InvoiceItemsDataContext> options) : base(options) { }

        public DbSet<InvoiceItem> invoiceItems { get; set; }
    }
}
