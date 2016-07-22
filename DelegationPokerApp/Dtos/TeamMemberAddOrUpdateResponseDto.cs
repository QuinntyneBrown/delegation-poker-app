namespace DelegationPokerApp.Dtos
{
    public class TeamMemberAddOrUpdateResponseDto: TeamMemberDto
    {
        public TeamMemberAddOrUpdateResponseDto(Models.TeamMember entity)
        :base(entity)
        {

        }
    }
}
