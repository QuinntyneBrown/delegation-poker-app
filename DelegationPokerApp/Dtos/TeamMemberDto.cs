namespace DelegationPokerApp.Dtos
{
    public class TeamMemberDto
    {
        public TeamMemberDto(DelegationPokerApp.Models.TeamMember entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TeamMemberDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
