namespace DelegationPokerApp.Dtos
{
    public class TeamDto
    {
        public TeamDto(DelegationPokerApp.Models.Team entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public TeamDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
