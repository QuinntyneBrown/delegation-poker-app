using DelegationPokerApp.Models;
using System.Collections.Generic;

namespace DelegationPokerApp.Dtos
{
    public class DigitalAssetUploadResponseDto
    {
        public DigitalAssetUploadResponseDto() { }

        public DigitalAssetUploadResponseDto(ICollection<DigitalAsset> DigitalAssets)
        {
            foreach (var DigitalAsset in DigitalAssets)
            {
                Files.Add(new DigitalAssetDto(DigitalAsset));
            }
        }

        public IList<DigitalAssetDto> Files { get; set; } = new List<DigitalAssetDto>();
    }
}
