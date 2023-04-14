using BasicASPTutorial.Models;
using dotnet_foodRelease.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_foodRelease.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InvoiceController : Controller
    {
        private static List<Invoice> invoiceList = new List<Invoice>
        {
            new Invoice
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
            }
        };

        private readonly InvoiceContext _context;

        public InvoiceController(InvoiceContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Invoice>>> Get()
        {


            return Ok(await _context.Invoice.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> Get(int id)
        {
            var invoice = await _context.Invoice.FindAsync(id);
            if (invoice == null)
            {
                return BadRequest("Invoice ID Not Found");
            }
            return Ok(invoice);
        }

        [HttpPost]
        public async Task<ActionResult<List<Invoice>>> AddFoods(Invoice invoice)
        {
            _context.Invoice.Add(invoice);
            await _context.SaveChangesAsync();

            return Ok(await _context.Invoice.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Invoice>> Delete(int id)
        {
            var dbInvoice = await _context.Invoice.FindAsync(id);
            if (dbInvoice == null)
            {
                return BadRequest("Invoice ID Not Found");
            }

            _context.Invoice.Remove(dbInvoice);
            await _context.SaveChangesAsync();

            return Ok(await _context.Invoice.ToListAsync());
        }
    }
}
