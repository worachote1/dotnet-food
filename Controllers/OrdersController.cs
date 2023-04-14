using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static BasicASPTutorial.Controllers.UserController;

namespace dotnet_foodRelease.Controllers
{
    public class OrdersController : Controller
    {
        private static List<Order> ordersList = new List<Order>
        {
            new Order
            {
                Id = 1,
                invoice = new Invoice
                {
                    id = 1,
                    date = DateTime.Now,
                    shopName = "Test",
                    itemsList = new List<InvoiceItem>
                    {
                        new InvoiceItem
                        {
                               id = 1,
                               shopItems = new shopItems
                               {
                                   id = 1,
                                   itemName = "Noodles",
                                   itemPrice = 50.0,
                                   type = "MAIN",
                                   imgPath = "https://test.com/img.jpg"
                               },
                               foodShop = new FoodShop
                               {
                                    Id = 1,
                                    Name = "KMITL-RES",
                                    imgPath = "https://test.com/img.jpg",
                                    address = "sample address",
                                    totalRating = 1000,
                                    totalVote = 1000,
                                    itemsList = new List<shopItems> {}
                               },
                               amt = 5
                        }
                    }
                },

                deliveryMan = new User {
                       id = 1,
                       UserName = "xsectorz",
                       Password = "test",
                       isDelivering = false,
                       address = "KMITL",
                       phoneNum = "081-0000000",
                       state = State.IDLE
                }

            }
        };

        private readonly OrderContext _context;

        public OrdersController(OrderContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {


            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            var orders = await _context.Orders.FindAsync(id);
            if (orders == null)
            {
                return BadRequest("Orders ID Not Found");
            }
            return Ok(orders);
        }

        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddFoods(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> Delete(int id)
        {
            var dbOrder = await _context.Orders.FindAsync(id);
            if (dbOrder == null)
            {
                return BadRequest("Orders ID Not Found");
            }

            _context.Orders.Remove(dbOrder);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }
    }
}
