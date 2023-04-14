using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Controllers
{
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
                itemsList = new List<shopItems> {}
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

        [HttpGet("{id}")]
        public async Task<ActionResult<FoodShop>> Get(int id)
        {
            var foodShop = await _context.foodShop.FindAsync(id);
            if (foodShop == null)
            {
                return BadRequest("foodShop ID Not Found");
            }
            return Ok(foodShop);
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
