﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dotnet_foodRelease.Data;

#nullable disable

namespace dotnet_food.Migrations.InvoiceItemsData
{
    [DbContext(typeof(InvoiceItemsDataContext))]
    [Migration("20230416084212_createNew")]
    partial class createNew
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BasicASPTutorial.Models.InvoiceItem", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int>("amt")
                        .HasColumnType("int");

                    b.Property<string>("itemName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("orderId")
                        .HasColumnType("int");

                    b.Property<double>("price")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.HasIndex("orderId");

                    b.ToTable("invoiceItems");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.Order", b =>
                {
                    b.Property<int>("orderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("orderId"));

                    b.Property<string>("customerName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("deliveryManName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("orderState")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("orderId");

                    b.ToTable("Order");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.InvoiceItem", b =>
                {
                    b.HasOne("BasicASPTutorial.Models.Order", "Order")
                        .WithMany("itemsList")
                        .HasForeignKey("orderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Order");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.Order", b =>
                {
                    b.Navigation("itemsList");
                });
#pragma warning restore 612, 618
        }
    }
}
