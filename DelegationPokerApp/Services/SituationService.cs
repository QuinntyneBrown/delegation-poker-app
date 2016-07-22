using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class SituationService : ISituationService
    {
        public SituationService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Situations;
            this.cache = cacheProvider.GetCache();
        }

        public SituationAddOrUpdateResponseDto AddOrUpdate(SituationAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Situation());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new SituationAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<SituationDto> Get()
        {
            ICollection<SituationDto> response = new HashSet<SituationDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new SituationDto(entity)); }    
            return response;
        }


        public SituationDto GetById(int id)
        {
            return new SituationDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Situation> repository;
        protected readonly ICache cache;
    }
}
