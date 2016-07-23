using DelegationPokerApp.Dtos;
using System.Collections.Generic;

namespace DelegationPokerApp.Services
{
    public interface IYouTubeVideoService
    {
        YouTubeVideoAddOrUpdateResponseDto AddOrUpdate(YouTubeVideoAddOrUpdateRequestDto request);
        ICollection<YouTubeVideoDto> Get();
        YouTubeVideoDto GetById(int id);
        dynamic Remove(int id);
    }
}
