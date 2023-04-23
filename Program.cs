using BasicASPTutorial.Data;
using dotnet_foodRelease.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<UserDataContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")
)
    );
builder.Services.AddDbContext<ShopItemsDataContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("ShopItemConnection")
)
    );
builder.Services.AddDbContext<InvoiceItemsDataContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("InvoiceItemConnection")
)
    );
builder.Services.AddDbContext<FoodShopContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("FoodShopConnection")
)
    );
builder.Services.AddDbContext<InvoiceContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("InvoiceConnection")
)
    );
builder.Services.AddDbContext<OrderContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("OrderConnection")
)
    );



var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Student}/{action=Index}/{id?}");

app.Run();
