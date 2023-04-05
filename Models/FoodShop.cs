namespace BasicASPTutorial.Models
{
    public class FoodShop
    {
        public string Name { get; set; }
        public string imgPath { get; set; }
        public string address { get; set; }

        public int score { get; set; }

        public List<shopItems> itemsList { get; set; }
    }
}
