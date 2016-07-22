namespace DelegationPokerApp.Dtos
{
    public class DelegationBoardItemDto
    {
        public DelegationBoardItemDto(DelegationPokerApp.Models.DelegationBoardItem entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public DelegationBoardItemDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
