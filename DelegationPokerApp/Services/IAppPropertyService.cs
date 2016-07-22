using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface IAppPropertyService
    {
        AppPropertyAddOrUpdateResponseDto AddOrUpdate(AppPropertyAddOrUpdateRequestDto request);
        ICollection<AppPropertyDto> Get();
        AppPropertyDto GetById(int id);
        dynamic Remove(int id);
    }
}
