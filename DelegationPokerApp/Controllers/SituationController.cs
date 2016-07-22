using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/situation")]
    public class SituationController : ApiController
    {
        public SituationController(ISituationService situationService)
        {
            _situationService = situationService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(SituationAddOrUpdateResponseDto))]
        public IHttpActionResult Add(SituationAddOrUpdateRequestDto dto) { return Ok(_situationService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(SituationAddOrUpdateResponseDto))]
        public IHttpActionResult Update(SituationAddOrUpdateRequestDto dto) { return Ok(_situationService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<SituationDto>))]
        public IHttpActionResult Get() { return Ok(_situationService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(SituationDto))]
        public IHttpActionResult GetById(int id) { return Ok(_situationService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_situationService.Remove(id)); }

        protected readonly ISituationService _situationService;


    }
}
