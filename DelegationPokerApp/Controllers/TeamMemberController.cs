using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/teamMember")]
    public class TeamMemberController : ApiController
    {
        public TeamMemberController(ITeamMemberService teamMemberService)
        {
            _teamMemberService = teamMemberService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(TeamMemberAddOrUpdateResponseDto))]
        public IHttpActionResult Add(TeamMemberAddOrUpdateRequestDto dto) { return Ok(_teamMemberService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(TeamMemberAddOrUpdateResponseDto))]
        public IHttpActionResult Update(TeamMemberAddOrUpdateRequestDto dto) { return Ok(_teamMemberService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<TeamMemberDto>))]
        public IHttpActionResult Get() { return Ok(_teamMemberService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(TeamMemberDto))]
        public IHttpActionResult GetById(int id) { return Ok(_teamMemberService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_teamMemberService.Remove(id)); }

        protected readonly ITeamMemberService _teamMemberService;


    }
}
