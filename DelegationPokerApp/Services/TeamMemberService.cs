using System;
using System.Collections.Generic;
using DelegationPokerApp.Dtos;
using DelegationPokerApp.Data;
using System.Linq;

namespace DelegationPokerApp.Services
{
    public class TeamMemberService : ITeamMemberService
    {
        public TeamMemberService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.TeamMembers;
            _cache = cacheProvider.GetCache();
        }

        public TeamMemberAddOrUpdateResponseDto AddOrUpdate(TeamMemberAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.TeamMember());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new TeamMemberAddOrUpdateResponseDto(entity);
        }

        public ICollection<TeamMemberDto> Get()
        {
            ICollection<TeamMemberDto> response = new HashSet<TeamMemberDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new TeamMemberDto(entity)); }
            return response;
        }

        public TeamMemberDto GetById(int id)
        {
            return new TeamMemberDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.TeamMember> _repository;
        protected readonly ICache _cache;
    }
}
