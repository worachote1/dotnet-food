using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnet_food.Migrations.UserData
{
    /// <inheritdoc />
    public partial class createNew : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "test",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "test2",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "state",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "state",
                table: "Users",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "test",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "test2",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
