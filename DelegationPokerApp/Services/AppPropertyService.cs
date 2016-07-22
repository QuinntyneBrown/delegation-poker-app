using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class AppPropertyService : IAppPropertyService
    {
        public AppPropertyService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.AppProperties;
            this.cache = cacheProvider.GetCache();
        }

        public AppPropertyAddOrUpdateResponseDto AddOrUpdate(AppPropertyAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new AppProperty());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AppPropertyAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<AppPropertyDto> Get()
        {
            ICollection<AppPropertyDto> response = new HashSet<AppPropertyDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new AppPropertyDto(entity)); }    
            return response;
        }


        public AppPropertyDto GetById(int id)
        {
            return new AppPropertyDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<AppProperty> repository;
        protected readonly ICache cache;
    }
}
