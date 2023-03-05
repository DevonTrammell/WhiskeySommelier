using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

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
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=ERICSMINIPC;Database=WhiskeySommelier;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bottle>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("bottle");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.Barrel).HasColumnName("barrel");

                entity.Property(e => e.Distiller).HasColumnName("distiller");

                entity.Property(e => e.Finish).HasColumnName("finish");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Nose).HasColumnName("nose");

                entity.Property(e => e.Palette).HasColumnName("palette");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
