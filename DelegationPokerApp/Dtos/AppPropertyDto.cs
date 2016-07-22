namespace DelegationPokerApp.Dtos
{
    public class AppPropertyDto
    {
        public AppPropertyDto(DelegationPokerApp.Models.AppProperty entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AppPropertyDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
