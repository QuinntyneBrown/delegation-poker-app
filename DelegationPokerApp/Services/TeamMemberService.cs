using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class TeamMemberService : ITeamMemberService
    {
        public TeamMemberService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.TeamMembers;
            this.cache = cacheProvider.GetCache();
        }

        public TeamMemberAddOrUpdateResponseDto AddOrUpdate(TeamMemberAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new TeamMember());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new TeamMemberAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<TeamMemberDto> Get()
        {
            ICollection<TeamMemberDto> response = new HashSet<TeamMemberDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new TeamMemberDto(entity)); }    
            return response;
        }


        public TeamMemberDto GetById(int id)
        {
            return new TeamMemberDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<TeamMember> repository;
        protected readonly ICache cache;
    }
}
