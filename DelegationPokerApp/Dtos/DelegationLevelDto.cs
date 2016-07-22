namespace DelegationPokerApp.Dtos
{
    public class DelegationLevelDto
    {
        public DelegationLevelDto(DelegationPokerApp.Models.DelegationLevel entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public DelegationLevelDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
