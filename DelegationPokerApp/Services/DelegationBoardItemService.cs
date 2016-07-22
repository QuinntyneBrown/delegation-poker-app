using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class DelegationBoardItemService : IDelegationBoardItemService
    {
        public DelegationBoardItemService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.DelegationBoardItems;
            this.cache = cacheProvider.GetCache();
        }

        public DelegationBoardItemAddOrUpdateResponseDto AddOrUpdate(DelegationBoardItemAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new DelegationBoardItem());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new DelegationBoardItemAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<DelegationBoardItemDto> Get()
        {
            ICollection<DelegationBoardItemDto> response = new HashSet<DelegationBoardItemDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new DelegationBoardItemDto(entity)); }    
            return response;
        }


        public DelegationBoardItemDto GetById(int id)
        {
            return new DelegationBoardItemDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<DelegationBoardItem> repository;
        protected readonly ICache cache;
    }
}
