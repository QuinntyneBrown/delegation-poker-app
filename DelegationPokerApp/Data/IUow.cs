using DelegationPokerApp.Models;

namespace DelegationPokerApp.Data
{
    public interface IUow
    {
        IRepository<AppProperty> AppProperties { get; }
        IRepository<DelegationBoard> DelegationBoards { get; }
        IRepository<DelegationBoardItem> DelegationBoardItems { get; }
        IRepository<DelegationLevel> DelegationLevels { get; }
        IRepository<DigitalAsset> DigitalAssets { get; }
        IRepository<Role> Roles { get; }
        IRepository<Situation> Situations { get; }
        IRepository<Team> Teams { get; }
        IRepository<TeamMember> TeamMembers { get; }
        IRepository<User> Users { get; }
        IRepository<YouTubeVideo> YouTubeVideos { get; }
        void SaveChanges();
    }
}
