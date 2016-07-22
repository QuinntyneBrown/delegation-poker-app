using DelegationPokerApp.Models;
using System.Data.Entity;

namespace DelegationPokerApp.Data
{
    public class DataContext: DbContext, IDbContext
    {
        public DataContext()
            : base(nameOrConnectionString: "DelegationPokerAppDataContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<AppProperty> AppProperties { get; set; }
        public DbSet<DelegationBoard> DelegationBoards { get; set; }
        public DbSet<DelegationBoardItem> DelegationBoardItems { get; set; }
        public DbSet<DelegationLevel> DelegationLevels { get; set; }
        public DbSet<DigitalAsset> DigitalAssets { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Situation> Situations { get; set; }
        public DbSet<Team> Teams { get; set; }
        public DbSet<TeamMember> TeamMembers { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        } 
    }
}
