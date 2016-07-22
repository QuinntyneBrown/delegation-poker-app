using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class DigitalAssetService : IDigitalAssetService
    {
        public DigitalAssetService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.DigitalAssets;
            this.cache = cacheProvider.GetCache();
        }

        public DigitalAssetAddOrUpdateResponseDto AddOrUpdate(DigitalAssetAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new DigitalAsset());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new DigitalAssetAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<DigitalAssetDto> Get()
        {
            ICollection<DigitalAssetDto> response = new HashSet<DigitalAssetDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new DigitalAssetDto(entity)); }    
            return response;
        }


        public DigitalAssetDto GetById(int id)
        {
            return new DigitalAssetDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<DigitalAsset> repository;
        protected readonly ICache cache;
    }
}
