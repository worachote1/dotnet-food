using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations.Invoice
{
    /// <inheritdoc />
    public partial class create : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InvoiceItem");

            migrationBuilder.DropTable(
                name: "shopItems");

            migrationBuilder.DropTable(
                name: "FoodShop");

            migrationBuilder.AddColumn<int>(
                name: "idOrder",
                table: "Invoice",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "idOrder",
                table: "Invoice");

            migrationBuilder.CreateTable(
                name: "FoodShop",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    imgPath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    totalRating = table.Column<int>(type: "int", nullable: false),
                    totalVote = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodShop", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "shopItems",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FoodShopId = table.Column<int>(type: "int", nullable: true),
                    countDelivery = table.Column<int>(type: "int", nullable: false),
                    imgPath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    itemName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    itemPrice = table.Column<double>(type: "float", nullable: false),
                    type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shopItems", x => x.id);
                    table.ForeignKey(
                        name: "FK_shopItems_FoodShop_FoodShopId",
                        column: x => x.FoodShopId,
                        principalTable: "FoodShop",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "InvoiceItem",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    foodShopId = table.Column<int>(type: "int", nullable: false),
                    shopItemsid = table.Column<int>(type: "int", nullable: false),
                    Invoiceid = table.Column<int>(type: "int", nullable: true),
                    amt = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceItem", x => x.id);
                    table.ForeignKey(
                        name: "FK_InvoiceItem_FoodShop_foodShopId",
                        column: x => x.foodShopId,
                        principalTable: "FoodShop",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_InvoiceItem_Invoice_Invoiceid",
                        column: x => x.Invoiceid,
                        principalTable: "Invoice",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_InvoiceItem_shopItems_shopItemsid",
                        column: x => x.shopItemsid,
                        principalTable: "shopItems",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceItem_foodShopId",
                table: "InvoiceItem",
                column: "foodShopId");

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceItem_Invoiceid",
                table: "InvoiceItem",
                column: "Invoiceid");

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceItem_shopItemsid",
                table: "InvoiceItem",
                column: "shopItemsid");

            migrationBuilder.CreateIndex(
                name: "IX_shopItems_FoodShopId",
                table: "shopItems",
                column: "FoodShopId");
        }
    }
}
