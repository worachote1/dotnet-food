using BasicASPTutorial.Data;
using BasicASPTutorial.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BasicASPTutorial.Controllers
{
    public class ShopItemController : Controller
    {
        private static List<shopItems> shopItemsList = new List<shopItems>
        {
            new shopItems {
                       id = 1,
                       itemName = "Noodles",
                       itemPrice = 50.0,
                       type = "MAIN",
                       imgPath = "https://test.com"
            },
        };

        private readonly shopItemDataContext _context;

        public ShopItemController(shopItemDataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<shopItems>>> Get()
        {


            return Ok(await _context.ShopItems.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<shopItems>> Get(int id)
        {
            var foodItems = await _context.ShopItems.FindAsync(id);
            if (foodItems == null)
            {
                return BadRequest("Food ID Not Found");
            }
            return Ok(foodItems);
        }

        [HttpPost]
        public async Task<ActionResult<List<shopItems>>> AddFoods(shopItems shopItem)
        {
            _context.ShopItems.Add(shopItem);
            await _context.SaveChangesAsync();

            return Ok(await _context.ShopItems.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<shopItems>> Delete(int id)
        {
            var dbfoodItems = await _context.ShopItems.FindAsync(id);
            if (dbfoodItems == null)
            {
                return BadRequest("Food ID Not Found");
            }

            _context.ShopItems.Remove(dbfoodItems);
            await _context.SaveChangesAsync();

            return Ok(await _context.ShopItems.ToListAsync());
        }

    }
}
