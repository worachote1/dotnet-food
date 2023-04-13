using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using dotnet_food.Models;

namespace dotnet_food.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        return View();
    }

}
