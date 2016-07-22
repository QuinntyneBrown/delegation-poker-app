namespace DelegationPokerApp.Models
{
    public class DelegationBoardItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDeleted { get; set; }
        public int? SituationId { get; set; }
        public Situation Situation { get; set; }
        public int? TeamId { get; set; }
        public int? TeamMemberId { get; set; }
        public int? DelegationLevelId { get; set; }
        public Team Team { get; set; }
        public TeamMember TeamMember { get; set; }
        public DelegationLevel DelegationLevel { get; set; }
    }
}
