﻿// <auto-generated />
using System;
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
    [Migration("20230416054033_createInitial")]
    partial class createInitial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("BasicASPTutorial.Models.FoodShop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("imgPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("totalRating")
                        .HasColumnType("int");

                    b.Property<int>("totalVote")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("FoodShop");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.InvoiceItem", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int>("amt")
                        .HasColumnType("int");

                    b.Property<int>("foodShopId")
                        .HasColumnType("int");

                    b.Property<int>("shopItemsid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("foodShopId");

                    b.HasIndex("shopItemsid");

                    b.ToTable("invoiceItems");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.shopItems", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int?>("FoodShopId")
                        .HasColumnType("int");

                    b.Property<int>("countDelivery")
                        .HasColumnType("int");

                    b.Property<string>("imgPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("itemPrice")
                        .HasColumnType("float");

                    b.Property<string>("type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("FoodShopId");

                    b.ToTable("shopItems");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.InvoiceItem", b =>
                {
                    b.HasOne("BasicASPTutorial.Models.FoodShop", "foodShop")
                        .WithMany()
                        .HasForeignKey("foodShopId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BasicASPTutorial.Models.shopItems", "shopItems")
                        .WithMany()
                        .HasForeignKey("shopItemsid")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("foodShop");

                    b.Navigation("shopItems");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.shopItems", b =>
                {
                    b.HasOne("BasicASPTutorial.Models.FoodShop", null)
                        .WithMany("itemsList")
                        .HasForeignKey("FoodShopId");
                });

            modelBuilder.Entity("BasicASPTutorial.Models.FoodShop", b =>
                {
                    b.Navigation("itemsList");
                });
#pragma warning restore 612, 618
        }
    }
}
