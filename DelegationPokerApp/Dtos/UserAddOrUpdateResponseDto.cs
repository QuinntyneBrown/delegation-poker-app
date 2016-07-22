namespace DelegationPokerApp.Dtos
{
    public class UserAddOrUpdateResponseDto: UserDto
    {
        public UserAddOrUpdateResponseDto(DelegationPokerApp.Models.User entity)
            :base(entity)
        {

        }
    }
}
