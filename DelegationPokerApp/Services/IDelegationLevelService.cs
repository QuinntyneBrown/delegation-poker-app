using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface IDelegationLevelService
    {
        DelegationLevelAddOrUpdateResponseDto AddOrUpdate(DelegationLevelAddOrUpdateRequestDto request);
        ICollection<DelegationLevelDto> Get();
        DelegationLevelDto GetById(int id);
        dynamic Remove(int id);
    }
}
