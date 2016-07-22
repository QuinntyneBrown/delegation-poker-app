namespace DelegationPokerApp.Dtos
{
    public class TeamMemberDto
    {
        public TeamMemberDto(DelegationPokerApp.Models.TeamMember entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            Firstname = entity.Firstname;
            Lastname = entity.Lastname;
            Position = entity.Position;
            Company = entity.Company;
            Title = entity.Title;
            Email = entity.Email;
        }

        public TeamMemberDto()
        {
            
        }

        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
    }
}
