using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Data
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options) : base(options) { }

        public DbSet<Order> Orders { get; set; }

    }
}
