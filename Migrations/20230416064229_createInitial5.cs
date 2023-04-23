using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations
{
    /// <inheritdoc />
    public partial class createInitial5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "shopItems");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
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
                        name: "FK_shopItems_foodShop_FoodShopId",
                        column: x => x.FoodShopId,
                        principalTable: "foodShop",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_shopItems_FoodShopId",
                table: "shopItems",
                column: "FoodShopId");
        }
    }
}
