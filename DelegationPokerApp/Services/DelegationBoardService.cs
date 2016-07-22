using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class DelegationBoardService : IDelegationBoardService
    {
        public DelegationBoardService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.DelegationBoards;
            this.cache = cacheProvider.GetCache();
        }

        public DelegationBoardAddOrUpdateResponseDto AddOrUpdate(DelegationBoardAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new DelegationBoard());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new DelegationBoardAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<DelegationBoardDto> Get()
        {
            ICollection<DelegationBoardDto> response = new HashSet<DelegationBoardDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new DelegationBoardDto(entity)); }    
            return response;
        }


        public DelegationBoardDto GetById(int id)
        {
            return new DelegationBoardDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<DelegationBoard> repository;
        protected readonly ICache cache;
    }
}
