using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            },
            new User {
                       id = 2,
                       UserName = "admin",
                       Password = "123456admin",
                       isDelivering = false,
                       address = "KMITL",
                       phoneNum = "081-0000000"
            }
        };

        private readonly UserDataContext _context;

        public UserController(UserDataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            // return Ok(new {msg = 44});
            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<User>> Get(string username)
        {
            var user = await _context.Users.SingleOrDefaultAsync(obj => obj.UserName == username);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        //update user by username
        [HttpPut("{username}")]
        public async Task<ActionResult<List<User>>> UpdateUser(string username, User user)
        {
            var cur_user = await _context.Users.SingleOrDefaultAsync(obj => obj.UserName == username);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }
            cur_user.UserName = user.UserName;
            cur_user.Password = user.Password;
            cur_user.isDelivering = user.isDelivering;
            cur_user.address = user.address;
            cur_user.phoneNum = user.phoneNum;

            _context.Update(cur_user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{username}")]
        public async Task<ActionResult<User>> Delete(string username)
        {
            var dbuser = await _context.Users.SingleOrDefaultAsync(obj => obj.UserName == username);
            if (dbuser == null)
            {
                return BadRequest("User Not Found");
            }

            _context.Users.Remove(dbuser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());

        }

        [HttpGet]
        [Route("login")]
        // http://localhost:5000/api/user/login?username=prn&password=prn32131
        public async Task<ActionResult<User>> login(string username, string password)
        {
            User user = await _context.Users.FirstOrDefaultAsync(u => u.UserName == username);

            if (user == null)
            {
                Console.WriteLine("Username not found in database!");
                return BadRequest(new { loginStatus = "Username not found in database!" });
            }

            if (user.Password != password)
            {
                Console.WriteLine("The password is incorrect. Please try again!");
                return BadRequest(new { loginStatus = "The password is incorrect. Please try again!" });
            }

            return Ok(new { loginStatus = "Login Success!" });
        }

        [HttpPost]
        [Route("register")]
        // make the register() method handle POST requests to the URL path  `/api/user/register`
        public async Task<ActionResult<User>> register(User user)
        {

            if(await _context.Users.AnyAsync(u => u.UserName == user.UserName))
            {
                return BadRequest(new { registerStatus = "Username already exists!" });
            }

            if(user.Password == "")
            {
                return BadRequest(new { registerStatus = "Password cannot empty!" });
            }

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { registerStatus = "Register Success!" });
        }

    }
}


