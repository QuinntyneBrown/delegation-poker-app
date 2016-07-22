using System.Collections.Generic;

namespace DelegationPokerApp.Models
{
    public class DelegationBoard
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<DelegationBoardItem> DelegationBoardItems { get; set; } = new HashSet<DelegationBoardItem>();
        public bool IsDeleted { get; set; }
    }
}
