using Microsoft.AspNetCore.Mvc;

namespace dotnet_food.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestApiController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { message = "Hello from the backend!" });
        }
    }
}