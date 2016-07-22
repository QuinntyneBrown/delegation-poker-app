using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/team")]
    public class TeamController : ApiController
    {
        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(TeamAddOrUpdateResponseDto))]
        public IHttpActionResult Add(TeamAddOrUpdateRequestDto dto) { return Ok(_teamService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(TeamAddOrUpdateResponseDto))]
        public IHttpActionResult Update(TeamAddOrUpdateRequestDto dto) { return Ok(_teamService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<TeamDto>))]
        public IHttpActionResult Get() { return Ok(_teamService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(TeamDto))]
        public IHttpActionResult GetById(int id) { return Ok(_teamService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_teamService.Remove(id)); }

        protected readonly ITeamService _teamService;


    }
}
