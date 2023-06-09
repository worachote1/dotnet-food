﻿using BasicASPTutorial.Models;
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
                // itemsList = new List<InvoiceItem>
                //     {
                //         new InvoiceItem
                //         {
                //             itemName = "Item 1",
                //             price = 10.0,
                //             amt = 2
                //         },
                //         new InvoiceItem
                //         {
                //             itemName = "Item 2",
                //             price = 20.0,
                //             amt = 1
                //         },
                //         new InvoiceItem
                //         {
                //             itemName = "Item 3",
                //             price = 5.0,
                //             amt = 3
                //         }
                //     }
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

        // prn : get order by orderId
        [HttpGet("{orderId}")]
        public async Task<ActionResult<Order>> Get(int orderId)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
            {
                return BadRequest("Order ID Not Found");
            }
            return Ok(order);
        }

        //prn : get orders rom customerName
        [HttpGet]
        [Route("by_customer")]
        public async Task<ActionResult<Order>> getByCustomerName(string customerName)
        {
            var orders = await _context.Orders.Where(obj => obj.customerName == customerName).ToListAsync();
            if (orders == null)
            {
                return BadRequest("Not Found orders belong to user");
            }
            return Ok(orders);
        }

        [HttpPut("{orderId}")]
        public async Task<ActionResult<Order>> UpdateOrder(int orderId, [FromBody] Order updatedOrder)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null)
            {
                return NotFound();
            }

            order.deliveryManName = updatedOrder.deliveryManName;
            order.customerName = updatedOrder.customerName;
            order.orderState = updatedOrder.orderState;
            order.date = updatedOrder.date;
            order.menuInBasket = updatedOrder.menuInBasket;
            order.foodshopInBasket = updatedOrder.foodshopInBasket;

            // _context.Entry(order).State = EntityState.Modified;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddFoods(Order order)
        {
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpDelete("{orderId}")]
        public async Task<ActionResult<Order>> Delete(int orderId)
        {
            var dbOrder = await _context.Orders.FindAsync(orderId);
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
