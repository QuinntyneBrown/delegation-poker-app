namespace DelegationPokerApp.Dtos
{
    public class TeamMemberDto
    {
        public TeamMemberDto()
        {

        }

        public TeamMemberDto(Models.TeamMember entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
