﻿using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace BasicASPTutorial.Models
{
    public class Order
    {
        [Key]
        public int orderId { get; set; }
        public string deliveryManName { get; set; }
        public string customerName { get; set; }
        public string orderState { get; set; }

        public string date { get; set; }

        // public ICollection<InvoiceItem> itemsList { get; set; }
        public string menuInBasket {get; set;}

        public string foodshopInBasket {get; set;}
    }
}
