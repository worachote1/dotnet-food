namespace BasicASPTutorial.Models
{
    public class InvoiceItem
    {
        public int id { get; set; }
        public shopItems shopItems { get; set; }
        public int amt { get; set; }
        public FoodShop foodShop { get; set; }
        
    }
}
