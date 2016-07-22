using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface ITeamService
    {
        TeamAddOrUpdateResponseDto AddOrUpdate(TeamAddOrUpdateRequestDto request);
        ICollection<TeamDto> Get();
        TeamDto GetById(int id);
        dynamic Remove(int id);
    }
}
