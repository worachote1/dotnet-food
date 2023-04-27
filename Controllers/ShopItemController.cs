using BasicASPTutorial.Data;
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
                       imgPath = "https://test.com/img.jpg",
                       totalItemOrder = 0,
                       fromWhichFoodShop = "KMITL-RES"
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

        // prn get by foodshop name
        [HttpGet("byFoodShopName/{foodShopName}")]
        public async Task<ActionResult<shopItems>> Get(string foodShopName)
        {
            var foodItems = await _context.shopItems.Where(obj => obj.fromWhichFoodShop == foodShopName).ToListAsync();
            if (foodItems == null)
            {
                return BadRequest("Food ID Not Found");
            }
            return Ok(foodItems);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<shopItems>> addCount(int id, shopItems shopItems)
        {
            var cur_shopItems = await _context.shopItems.FindAsync(id);
            if (cur_shopItems == null)
            {
                return BadRequest("Food ID Not Found");
            }

            cur_shopItems.itemName = shopItems.itemName;
            cur_shopItems.itemPrice = shopItems.itemPrice;
            cur_shopItems.type = shopItems.type;
            cur_shopItems.imgPath = shopItems.imgPath;
            cur_shopItems.fromWhichFoodShop = shopItems.fromWhichFoodShop;
            cur_shopItems.totalItemOrder = shopItems.totalItemOrder;

            _context.shopItems.Update(cur_shopItems);
            await _context.SaveChangesAsync();

            return Ok(cur_shopItems);
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
