namespace DelegationPokerApp.Dtos
{
    public class YouTubeVideoDto
    {
        public YouTubeVideoDto(DelegationPokerApp.Models.YouTubeVideo entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public YouTubeVideoDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
