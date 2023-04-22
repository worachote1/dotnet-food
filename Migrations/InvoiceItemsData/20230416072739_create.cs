using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations.InvoiceItemsData
{
    /// <inheritdoc />
    public partial class create : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_invoiceItems_FoodShop_foodShopId",
                table: "invoiceItems");

            migrationBuilder.DropForeignKey(
                name: "FK_invoiceItems_shopItems_shopItemsid",
                table: "invoiceItems");

            migrationBuilder.DropTable(
                name: "shopItems");

            migrationBuilder.DropTable(
                name: "FoodShop");

            migrationBuilder.DropIndex(
                name: "IX_invoiceItems_foodShopId",
                table: "invoiceItems");

            migrationBuilder.DropIndex(
                name: "IX_invoiceItems_shopItemsid",
                table: "invoiceItems");

            migrationBuilder.DropColumn(
                name: "foodShopId",
                table: "invoiceItems");

            migrationBuilder.DropColumn(
                name: "shopItemsid",
                table: "invoiceItems");

            migrationBuilder.AddColumn<string>(
                name: "itemName",
                table: "invoiceItems",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "price",
                table: "invoiceItems",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "itemName",
                table: "invoiceItems");

            migrationBuilder.DropColumn(
                name: "price",
                table: "invoiceItems");

            migrationBuilder.AddColumn<int>(
                name: "foodShopId",
                table: "invoiceItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "shopItemsid",
                table: "invoiceItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

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

            migrationBuilder.CreateIndex(
                name: "IX_invoiceItems_foodShopId",
                table: "invoiceItems",
                column: "foodShopId");

            migrationBuilder.CreateIndex(
                name: "IX_invoiceItems_shopItemsid",
                table: "invoiceItems",
                column: "shopItemsid");

            migrationBuilder.CreateIndex(
                name: "IX_shopItems_FoodShopId",
                table: "shopItems",
                column: "FoodShopId");

            migrationBuilder.AddForeignKey(
                name: "FK_invoiceItems_FoodShop_foodShopId",
                table: "invoiceItems",
                column: "foodShopId",
                principalTable: "FoodShop",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_invoiceItems_shopItems_shopItemsid",
                table: "invoiceItems",
                column: "shopItemsid",
                principalTable: "shopItems",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
