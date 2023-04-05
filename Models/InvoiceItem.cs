namespace BasicASPTutorial.Models
{
    public class InvoiceItem
    {
        public string itemName { get; set; }
        public float itemPrice { get; set; }
        public int amt { get; set; }
        public FoodShop foodShop { get; set; }
        
    }
}
