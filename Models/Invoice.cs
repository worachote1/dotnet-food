namespace BasicASPTutorial.Models
{
    public class Invoice
    {

        public DateTime date { get; set; }
        public string shopName { get; set; }
        
        public List<InvoiceItem> itemsList { get; set; }
    }
}
