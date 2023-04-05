namespace BasicASPTutorial.Models
{
    public class Order
    {
        public Invoice Invoice { get; set; }

        public string deliveryName { get; set; }
    }
}
