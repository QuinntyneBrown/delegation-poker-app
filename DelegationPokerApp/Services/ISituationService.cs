using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface ISituationService
    {
        SituationAddOrUpdateResponseDto AddOrUpdate(SituationAddOrUpdateRequestDto request);
        ICollection<SituationDto> Get();
        SituationDto GetById(int id);
        dynamic Remove(int id);
    }
}
