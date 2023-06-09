﻿using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodShopController : Controller
    {
        private static List<FoodShop> invoiceItemsList = new List<FoodShop>
        {
            new FoodShop
            {
                Id = 1,
                Name = "KMITL-RES",
                imgPath = "https://test.com/img.jpg",
                address = "sample address",
                totalRating = 1000,
                totalVote = 1000,
            }
        };

        private readonly FoodShopContext _context;

        public FoodShopController(FoodShopContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<FoodShop>>> Get()
        {
            return Ok(await _context.foodShop.ToListAsync());
        }

        // prn get food shop by name
        [HttpGet("{foodShopName}")]
        public async Task<ActionResult<FoodShop>> Get(string foodShopName)
        {
            var foodShop = await _context.foodShop.SingleOrDefaultAsync(obj => obj.Name == foodShopName);
            if (foodShop == null)
            {
                return BadRequest("FoodShop Not Found");
            }
            return Ok(foodShop);
        }      

        [HttpPut("{foodShopName}")]
        public async Task<ActionResult<FoodShop>> UpdateRating(string foodShopName,FoodShop foodShop)
        {
            var cur_foodShop = await _context.foodShop.SingleOrDefaultAsync(obj => obj.Name == foodShopName);
            if (foodShop == null)
            {
                return BadRequest("foodShop ID Not Found");
            }

            cur_foodShop.Name = foodShop.Name;
            cur_foodShop.imgPath = foodShop.imgPath;
            cur_foodShop.address = foodShop.address;
            cur_foodShop.totalRating = foodShop.totalRating;
            cur_foodShop.totalVote = foodShop.totalVote;

            _context.foodShop.Update(cur_foodShop);

            await _context.SaveChangesAsync();

            return Ok(cur_foodShop);
        }

        [HttpPost]
        public async Task<ActionResult<List<FoodShop>>> AddFoods(FoodShop foodShop)
        {
            _context.foodShop.Add(foodShop);
            await _context.SaveChangesAsync();

            return Ok(await _context.foodShop.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<FoodShop>> Delete(int id)
        {
            var dbFoodShop = await _context.foodShop.FindAsync(id);
            if (dbFoodShop == null)
            {
                return BadRequest("FoodShop ID Not Found");
            }

            _context.foodShop.Remove(dbFoodShop);
            await _context.SaveChangesAsync();

            return Ok(await _context.foodShop.ToListAsync());
        }
    }
}
