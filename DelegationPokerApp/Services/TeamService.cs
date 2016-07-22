using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class TeamService : ITeamService
    {
        public TeamService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Teams;
            this.cache = cacheProvider.GetCache();
        }

        public TeamAddOrUpdateResponseDto AddOrUpdate(TeamAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new Team());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TeamAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TeamDto> Get()
        {
            ICollection<TeamDto> response = new HashSet<TeamDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new TeamDto(entity)); }    
            return response;
        }


        public TeamDto GetById(int id)
        {
            return new TeamDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<Team> repository;
        protected readonly ICache cache;
    }
}
