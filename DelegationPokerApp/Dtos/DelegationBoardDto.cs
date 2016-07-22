namespace DelegationPokerApp.Dtos
{
    public class DelegationBoardDto
    {
        public DelegationBoardDto(DelegationPokerApp.Models.DelegationBoard entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public DelegationBoardDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
