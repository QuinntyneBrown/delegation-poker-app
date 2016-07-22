using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface ITeamMemberService
    {
        TeamMemberAddOrUpdateResponseDto AddOrUpdate(TeamMemberAddOrUpdateRequestDto request);
        ICollection<TeamMemberDto> Get();
        TeamMemberDto GetById(int id);
        dynamic Remove(int id);
    }
}
