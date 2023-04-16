﻿using BasicASPTutorial.Data;
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

        public UserController(UserDataContext context) {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<User>> Get(string username)
        {
            var user = await _context.Users.FindAsync(username);
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

        [HttpPut("{username}")]
        public async Task<ActionResult<List<User>>> setDelivery(string username, bool isDelivering)
        {
            var user = await _context.Users.FindAsync(username);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }


            user.isDelivering = isDelivering;
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut("{username}")]
        public async Task<ActionResult<User>> setState(string username, string state)
        {
            var user = await _context.Users.FindAsync(username);
            if (user == null)
            {
                return BadRequest("User Not Found");
            }

            user.state = state;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete("{username}")]
        public async Task<ActionResult<User>> Delete(string username)
        {
            var dbuser = await _context.Users.FindAsync(username);
            if (dbuser == null)
            {
                return BadRequest("User Not Found");
            }

            _context.Users.Remove(dbuser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());

        }

    }
}
