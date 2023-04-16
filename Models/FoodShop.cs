namespace BasicASPTutorial.Models
{
    public class FoodShop
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string imgPath { get; set; }
        public string address { get; set; }

        public int totalRating { get; set; }
        public int totalVote { get; set; }

        //Rating Result = totalRating/totalVote
    }
}
