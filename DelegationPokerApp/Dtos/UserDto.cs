namespace DelegationPokerApp.Dtos
{
    public class UserDto
    {
        public UserDto(DelegationPokerApp.Models.User entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public UserDto()
        {
            
        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}
