namespace BasicASPTutorial.Models
{
    public class Order
    {
        public int Id { get; set; }

        public Invoice invoice { get; set; }
        public User deliveryMan { get; set; }
    }
}
