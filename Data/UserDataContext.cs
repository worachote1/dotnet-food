using BasicASPTutorial.Models;
using Microsoft.EntityFrameworkCore;

namespace BasicASPTutorial.Data
{
    public class UserDataContext : DbContext
    {
        public UserDataContext(DbContextOptions<UserDataContext> options) : base(options) { }
    
        public DbSet<User> Users { get; set; } 
    
    }
}