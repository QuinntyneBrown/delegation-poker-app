using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface IDelegationBoardService
    {
        DelegationBoardAddOrUpdateResponseDto AddOrUpdate(DelegationBoardAddOrUpdateRequestDto request);
        ICollection<DelegationBoardDto> Get();
        DelegationBoardDto GetById(int id);
        dynamic Remove(int id);
    }
}
