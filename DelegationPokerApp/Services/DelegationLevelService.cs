using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class DelegationLevelService : IDelegationLevelService
    {
        public DelegationLevelService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.DelegationLevels;
            this.cache = cacheProvider.GetCache();
        }

        public DelegationLevelAddOrUpdateResponseDto AddOrUpdate(DelegationLevelAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new DelegationLevel());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new DelegationLevelAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<DelegationLevelDto> Get()
        {
            ICollection<DelegationLevelDto> response = new HashSet<DelegationLevelDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new DelegationLevelDto(entity)); }    
            return response;
        }


        public DelegationLevelDto GetById(int id)
        {
            return new DelegationLevelDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<DelegationLevel> repository;
        protected readonly ICache cache;
    }
}
