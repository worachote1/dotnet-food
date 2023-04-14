﻿using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BasicASPTutorial.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopItemController : Controller
    {
        private static List<shopItems> shopItemsList = new List<shopItems>
        {
            new shopItems {
                       id = 1,
                       itemName = "Noodles",
                       itemPrice = 50.0,
                       type = "MAIN",
                       imgPath = "https://test.com/img.jpg"
            },
        };

        private readonly ShopItemsDataContext _context;

        public ShopItemController(ShopItemsDataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<shopItems>>> Get()
        {


            return Ok(await _context.shopItems.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<shopItems>> Get(int id)
        {
            var foodItems = await _context.shopItems.FindAsync(id);
            if (foodItems == null)
            {
                return BadRequest("Food ID Not Found");
            }
            return Ok(foodItems);
        }

        [HttpPost]
        public async Task<ActionResult<List<shopItems>>> AddFoods(shopItems shopItem)
        {
            _context.shopItems.Add(shopItem);
            await _context.SaveChangesAsync();

            return Ok(await _context.shopItems.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<shopItems>> Delete(int id)
        {
            var dbfoodItems = await _context.shopItems.FindAsync(id);
            if (dbfoodItems == null)
            {
                return BadRequest("Food ID Not Found");
            }

            _context.shopItems.Remove(dbfoodItems);
            await _context.SaveChangesAsync();

            return Ok(await _context.shopItems.ToListAsync());
        }

    }
}