using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/youTubeVideo")]
    public class YouTubeVideoController : ApiController
    {
        public YouTubeVideoController(IYouTubeVideoService youTubeVideoService)
        {
            _youTubeVideoService = youTubeVideoService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(YouTubeVideoAddOrUpdateResponseDto))]
        public IHttpActionResult Add(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(_youTubeVideoService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(YouTubeVideoAddOrUpdateResponseDto))]
        public IHttpActionResult Update(YouTubeVideoAddOrUpdateRequestDto dto) { return Ok(_youTubeVideoService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<YouTubeVideoDto>))]
        public IHttpActionResult Get() { return Ok(_youTubeVideoService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(YouTubeVideoDto))]
        public IHttpActionResult GetById(int id) { return Ok(_youTubeVideoService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_youTubeVideoService.Remove(id)); }

        protected readonly IYouTubeVideoService _youTubeVideoService;


    }
}
