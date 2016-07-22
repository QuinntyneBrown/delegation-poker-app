using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface IDelegationBoardItemService
    {
        DelegationBoardItemAddOrUpdateResponseDto AddOrUpdate(DelegationBoardItemAddOrUpdateRequestDto request);
        ICollection<DelegationBoardItemDto> Get();
        DelegationBoardItemDto GetById(int id);
        dynamic Remove(int id);
    }
}
