// using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

namespace BasicASPTutorial.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private static List<User> users = new List<User>
        {
            new User {
                       id = 1,
                       UserName = "xsectorz",
                       Password = "test",
                       isDelivering = false,
                       address = "KMITL",
                       phoneNum = "081-0000000"
                    //    state = State.IDLE
            },
            new User { 
                       id = 2,
                       UserName = "admin",
                       Password = "123456admin",
                       isDelivering = false,
                       address = "KMITL",
                       phoneNum = "081-0000000",
                    //    state = State.IDLE
            }
        };

        // private readonly DataContext _context;

        // public UserController(DataContext context) {
        //     _context = context;
        // }


        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            // User[] items = users.ToArray();
            return Ok( new User { 
                       id = 3,
                       UserName = "admin333333333",
                       Password = "123456admin",
                       isDelivering = false,
                       address = "KMITL",
                       phoneNum = "081-0000000",
                    //    state = State.IDLE
            });
        }

    

        // [HttpGet("{id}")]
        // public async Task<ActionResult<User>> Get(string username)
        // {
        //     var user = await _context.Users.FindAsync(username);
        //     if (user == null)
        //     {
        //         return BadRequest("User Not Found");
        //     }
        //     return Ok(user);
        // }

        // [HttpPost]
        // public async Task<ActionResult<List<User>>> AddUser(User user)
        // {
        //     _context.Users.Add(user);
        //     await _context.SaveChangesAsync();

        //     return Ok(await _context.Users.ToListAsync());
        // }

        // [HttpPut]
        // public async Task<ActionResult<List<User>>> UpdateUser(User userUpdate)
        // {
        //     var user = await _context.Users.FindAsync(userUpdate.UserName);
        //     if (user == null)
        //     {
        //         return BadRequest("User Not Found");
        //     }

        //     user.isDelivering = userUpdate.isDelivering;
        //     await _context.SaveChangesAsync();

        //     return Ok(await _context.Users.ToListAsync());
        // }

        // [HttpDelete("{id}")]
        // public async Task<ActionResult<User>> Delete(string username)
        // {
        //     var dbuser = await _context.Users.FindAsync(username);
        //     if (dbuser == null)
        //     {
        //         return BadRequest("User Not Found");
        //     }

        //     _context.Users.Remove(dbuser);
        //     await _context.SaveChangesAsync();

        //     return Ok(await _context.Users.ToListAsync());
        // }

    }
}