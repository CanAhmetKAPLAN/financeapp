using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class SeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "74a73cc5-e8dc-4cef-a953-0f4725c6ff03", "dd13ce47-5416-49df-999e-8835b15fc791", "admin", "ADMIN" },
                    { "ec5b3bf3-1698-46e1-89d7-8cbce067c210", "8811c972-7a67-467f-b304-c3b571dc3e12", "user", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "74a73cc5-e8dc-4cef-a953-0f4725c6ff03");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec5b3bf3-1698-46e1-89d7-8cbce067c210");
        }
    }
}
