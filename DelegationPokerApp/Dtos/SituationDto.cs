namespace DelegationPokerApp.Dtos
{
    public class SituationDto
    {
        public SituationDto(DelegationPokerApp.Models.Situation entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public SituationDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
