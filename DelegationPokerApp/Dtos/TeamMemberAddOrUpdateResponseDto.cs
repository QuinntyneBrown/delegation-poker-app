namespace DelegationPokerApp.Dtos
{
    public class TeamMemberAddOrUpdateResponseDto: TeamMemberDto
    {
        public TeamMemberAddOrUpdateResponseDto(DelegationPokerApp.Models.TeamMember entity)
            :base(entity)
        {

        }
    }
}
