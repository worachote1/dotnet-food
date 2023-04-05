namespace dotnet_food.Models;

public class ErrorViewModel
{
    public string test;
    public string? RequestId { get; set; }

    public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}
