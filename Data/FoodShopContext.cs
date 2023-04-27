using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Data
{
    public class FoodShopContext : DbContext
    {
        public FoodShopContext(DbContextOptions<FoodShopContext> options) : base(options) {}

        public DbSet<FoodShop> foodShop { get; set; }
    }
}
