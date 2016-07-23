using System;
using System.Collections.Generic;
using DelegationPokerApp.Data;
using DelegationPokerApp.Dtos;
using System.Data.Entity;
using System.Linq;
using DelegationPokerApp.Models;

namespace DelegationPokerApp.Services
{
    public class YouTubeVideoService : IYouTubeVideoService
    {
        public YouTubeVideoService(IUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.YouTubeVideos;
            this.cache = cacheProvider.GetCache();
        }

        public YouTubeVideoAddOrUpdateResponseDto AddOrUpdate(YouTubeVideoAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) repository.Add(entity = new YouTubeVideo());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new YouTubeVideoAddOrUpdateResponseDto(entity);
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<YouTubeVideoDto> Get()
        {
            ICollection<YouTubeVideoDto> response = new HashSet<YouTubeVideoDto>();
            var entities = repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach(var entity in entities) { response.Add(new YouTubeVideoDto(entity)); }    
            return response;
        }


        public YouTubeVideoDto GetById(int id)
        {
            return new YouTubeVideoDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IUow uow;
        protected readonly IRepository<YouTubeVideo> repository;
        protected readonly ICache cache;
    }
}
