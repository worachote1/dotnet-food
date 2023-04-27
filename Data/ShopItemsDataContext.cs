using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Data
{
    public class ShopItemsDataContext : DbContext
    {
        public ShopItemsDataContext(DbContextOptions<ShopItemsDataContext> options) : base(options) { }

        public DbSet<shopItems> shopItems { get; set; }
    }
}
