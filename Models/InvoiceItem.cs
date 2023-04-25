using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BasicASPTutorial.Models
{
    public class InvoiceItem
    {
        [Key]
        public int id { get; set; }
        public string itemName { get; set; }
        public double price { get; set; } //Per items
        public int amt { get; set; }

        public string imgPath { get; set; }

        public string type { get; set; }

        [ForeignKey("orderId")]
        public Order Order { get; set; }
        
    }
}
