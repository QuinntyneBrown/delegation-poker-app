namespace DelegationPokerApp.Data
{
    public interface IUow
    {
        IRepository<Models.TeamMember> TeamMembers { get; }
        void SaveChanges();
    }
}
