using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static BasicASPTutorial.Controllers.UserController;
using static dotnet_foodRelease.Controllers.OrdersController;

namespace dotnet_foodRelease.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : Controller
    {
        private static List<Order> ordersList = new List<Order>
        {
            new Order
            {
                orderId = 1,
                deliveryManName = "XXX",
                customerName = "xxxxY",
                orderState = "Sample",
                itemsList = new List<InvoiceItem>
                    {
                        new InvoiceItem
                        {
                            itemName = "Item 1",
                            price = 10.0,
                            amt = 2
                        },
                        new InvoiceItem
                        {
                            itemName = "Item 2",
                            price = 20.0,
                            amt = 1
                        },
                        new InvoiceItem
                        {
                            itemName = "Item 3",
                            price = 5.0,
                            amt = 3
                        }
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

        [HttpPut("{id}")]
        public async Task<ActionResult<Order>> setState(int id, string state)
        {
            var orders = await _context.Orders.FindAsync(id);
            if (orders == null)
            {
                return BadRequest("Orders ID Not Found");
            }

            orders.orderState = state;

            await _context.SaveChangesAsync();

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
