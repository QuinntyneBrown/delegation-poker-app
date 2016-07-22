using System.Collections.Generic;

namespace DelegationPokerApp.Models
{
    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TeamMember> TeamMembers { get; set; } = new HashSet<TeamMember>();
        public bool IsDeleted { get; set; }
    }
}
