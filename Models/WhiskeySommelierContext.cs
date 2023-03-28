using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.SqlServer.Metadata.Internal;
using static System.Net.Mime.MediaTypeNames;
using System.IO;

#nullable disable

namespace WhiskeySommelier.Models
{
    public partial class WhiskeySommelierContext : DbContext
    {
        public WhiskeySommelierContext()
        {
        }

        public WhiskeySommelierContext(DbContextOptions<WhiskeySommelierContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bottle> Bottles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string DbPath = Path.Combine(Environment.CurrentDirectory, @"DataBase//whiskey");

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite($"Data Source ={DbPath}");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bottle>(entity =>
            {
                // entity.HasNoKey();

                entity.ToTable("bottles");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Barrel).HasColumnName("barrel");

                entity.Property(e => e.Distiller).HasColumnName("distiller");

                entity.Property(e => e.Finish).HasColumnName("finish");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Nose).HasColumnName("nose");

                entity.Property(e => e.Palette).HasColumnName("palette");
                entity.Property(e => e.Type).HasColumnName("type");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
