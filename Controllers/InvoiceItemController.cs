﻿using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceItemController : Controller
    {
        private static List<InvoiceItem> invoiceItemsList = new List<InvoiceItem>
        {
            new InvoiceItem {
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
        };

        private readonly InvoiceItemsDataContext _context;

        public InvoiceItemController(InvoiceItemsDataContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<InvoiceItem>>> Get()
        {


            return Ok(await _context.invoiceItems.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<InvoiceItem>> Get(int id)
        {
            var invoiceItems = await _context.invoiceItems.FindAsync(id);
            if (invoiceItems == null)
            {
                return BadRequest("invoiceItems ID Not Found");
            }
            return Ok(invoiceItems);
        }

        [HttpPost]
        public async Task<ActionResult<List<InvoiceItem>>> AddFoods(InvoiceItem invoiceItem)
        {
            _context.invoiceItems.Add(invoiceItem);
            await _context.SaveChangesAsync();

            return Ok(await _context.invoiceItems.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Invoice>> Delete(int id)
        {
            var dbInvoiceItems = await _context.invoiceItems.FindAsync(id);
            if (dbInvoiceItems == null)
            {
                return BadRequest("invoiceItems ID Not Found");
            }

            _context.invoiceItems.Remove(dbInvoiceItems);
            await _context.SaveChangesAsync();

            return Ok(await _context.invoiceItems.ToListAsync());
        }

    }
}
