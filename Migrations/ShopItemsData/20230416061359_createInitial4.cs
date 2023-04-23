using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations.ShopItemsData
{
    /// <inheritdoc />
    public partial class createInitial4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "countDelivery",
                table: "shopItems",
                newName: "totalItemOrder");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "totalItemOrder",
                table: "shopItems",
                newName: "countDelivery");
        }
    }
}
