namespace BasicASPTutorial.Models
{
    public class User
    {

        public int id {  get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public Boolean isDelivering { get; set; }
        public string address { get; set; }
        public string phoneNum { get; set; }
        public State state { get; set; }

    }
}
