using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations.InvoiceItemsData
{
    /// <inheritdoc />
    public partial class createNew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "orderId",
                table: "invoiceItems",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Order",
                columns: table => new
                {
                    orderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    deliveryManName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    customerName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    orderState = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.orderId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_invoiceItems_orderId",
                table: "invoiceItems",
                column: "orderId");

            migrationBuilder.AddForeignKey(
                name: "FK_invoiceItems_Order_orderId",
                table: "invoiceItems",
                column: "orderId",
                principalTable: "Order",
                principalColumn: "orderId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_invoiceItems_Order_orderId",
                table: "invoiceItems");

            migrationBuilder.DropTable(
                name: "Order");

            migrationBuilder.DropIndex(
                name: "IX_invoiceItems_orderId",
                table: "invoiceItems");

            migrationBuilder.DropColumn(
                name: "orderId",
                table: "invoiceItems");
        }
    }
}
